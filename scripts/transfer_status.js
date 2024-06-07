const { Signer, Provider, Contract } = require('koilib');
const abi = require('./bridge-abi.json');
require('dotenv').config();

abi.koilib_types = abi.types;

const { RPC_URL, BRIDGE_ADDR } = process.env;

const TX_CHECK = '0x12209d27fe82db0cf9d9cfc40b48f3cb0025ba5ab2ddfcaeb2c9bb66640f62dc47f3';


async function main() {
  const provider = new Provider(RPC_URL);
  const signer = Signer.fromSeed("vortex");
  signer.provider = provider;

  const bridgeContract = new Contract({
    id: BRIDGE_ADDR,
    abi,
    provider,
    signer,
  });

  const result = await bridgeContract.functions.get_transfer_status({
    transactionId: TX_CHECK
  });

  console.log("result", result)
}
main()
  .catch(error => console.error(error));
