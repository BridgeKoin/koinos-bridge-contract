const { LocalKoinos, Token } = require('@roamin/local-koinos');
const { Signer, utils } = require('koilib');
const protobuf = require('protobufjs');
const { sha256 } = require('@noble/hashes/sha256')
const path = require('path');
const abi = require('./bridge-abi.json')

abi.koilib_types = abi.types;

const localKoinos = new LocalKoinos();

const validators = [];
const nbValidators = 3;

const bridgeProto = new protobuf.Root();
bridgeProto.loadSync(path.join(__dirname, '/../assembly/proto/bridge.proto'), { keepCase: true });
const completeTransferHashProto = bridgeProto.lookupType('bridge.complete_transfer_hash');
const addRemoveActionHashProto = bridgeProto.lookupType('bridge.add_remove_action_hash');
const actionIdProto = bridgeProto.lookupEnum('bridge.action_id');

const sign = async (buffer) => {
  const hash = sha256(buffer);
  const signatures = [];
  for (let index = 0; index < validators.length; index++) {
    const validator = validators[index];
    // signatures.push(utils.toHexString(await validator.signHash(hash)));
    signatures.push(utils.encodeBase64url(await validator.signHash(hash)));
  }

  return signatures;
};

async function main() {
  // start local-koinos node
  //await localKoinos.stopNode();
  await localKoinos.startNode();
  await localKoinos.startBlockProduction();

  await localKoinos.deployKoinContract();
  await localKoinos.mintKoinDefaultAccounts();

  const [genesis, koin, bridge, mockToken, val1, val2, val3, user] = localKoinos.getAccounts();
  validators.push(val1.signer);
  validators.push(val2.signer);
  validators.push(val3.signer);

  const mockTokenContract = await localKoinos.deployTokenContract(mockToken.wif);
  console.log('mock tocken contract deployed at', mockToken.address);

  let result = await mockTokenContract.mint(user.address, '1000000000000000');
  console.log(result.receipt.events)
  await result.transaction.wait();
  result = await mockTokenContract.balanceOf(user.address);
  console.log(`minted ${result} mock tokens to ${user.address}`);


  // deploy bridge contract
  const bridgeContract = await localKoinos.deployContract(bridge.wif, path.join(__dirname, '/../build/release/contract.wasm'), abi);
  console.log('bridge contract deployed at', bridge.address);

  result = await bridgeContract.functions.initialize({
    initialValidators: [
      val1.address, 
      val2.address, 
      val3.address
    ]
  });

  await result.transaction.wait();

  console.log('initialized bridge contract');


  result = await bridgeContract.functions.get_validators({
    start: val2.address
  });
  console.log(result.result)

  let { result: { nonce } } = await bridgeContract.functions.get_metadata();

  let expiration = `${new Date().getTime()+3600*1000}`;
  let buffer = addRemoveActionHashProto.encode({
    action: actionIdProto.values['add_supported_token'],
    address: utils.decodeBase58(mockToken.address),
    nonce,
    contract_id: utils.decodeBase58(bridge.address),
    expiration
  }).finish();
  
  let signatures = await sign(buffer);
  
  result = await bridgeContract.functions.add_supported_token({
    signatures,
    token: mockToken.address,
    expiration
  });

  await result.transaction.wait();

  console.log('added support for token ', mockToken.address);

  bridgeContract.signer = user.signer;
  result = await bridgeContract.functions.transfer_tokens({
    from: user.address,
    token: mockToken.address,
    amount: '2500',
    recipient: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'
  });

  await result.transaction.wait();

  console.log('transfer tokens', result.receipt.events);
}

main()
  .catch(error => console.error(error))
  .finally(async () => {
    await localKoinos.stopNode();
  });