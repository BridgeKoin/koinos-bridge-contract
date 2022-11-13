const { Signer, Provider, Contract, utils } = require('koilib');
const abi = require('./bridge-abi.json')

abi.koilib_types = abi.types;

const USER_WIF = '5KgE5Tfm7zuJ6q6tnUJVW93dCDiDDk5mgaffrRJSdwg5hQbDHGK';
const BRIDGE_CONTRACT_ADDR = '1JaMS92SPa3rQoZqUifP7GJxp2MEULxrJB';

const main = async () => {
  const provider = new Provider('http://localhost:8080');

  const signer = Signer.fromWif(USER_WIF);
  signer.provider = provider;

  const bridgeContract = new Contract({
    id: BRIDGE_CONTRACT_ADDR,
    abi,
    provider,
    signer,
  });

  const signatures = [
    "IN_KKb09Vhrvta_obmBy71Bt6hjvRo9iAOmjTkQPz3e1f7hiWzWGhc6TonEiMIG1dFAmPuvILwiNmuYxV39YexE=",
    "ILirqxPgwrI4RLxQ94QcEVZH4BoCNeh1WU9ujhQs_RJJKKVTdUVm-SKUGONxyFlDP3YtRCVVhihG_SY7OFqaMQI=",
    "H_wEIRZwjqZ0fv-LMcewaUqP-1TZQA71uT42OXtWvEJbHg5yHzJ7JivJfd3gvHcBqwpz2-lHZl2EmaOBzOeo36I="
  ];

  let result = await bridgeContract.functions.complete_transfer({
    transactionId: '0xc4519e2c82831a2760bd3fbbdef9b2e946c865ed2a8558ea6fe6f9c4b883c73d',
    token: '1NZcHP37xvQNDZEkGH2RUceFqa33K3FXEG',
    recipient: '1GE2JqXw5LMQaU1sj82Dy8ZEe2BRXQS1cs',
    value: '25000',
    expiration: '1668210858000',
    signatures
  });

  console.log(result.receipt);

  const res = await result.transaction.wait();
  console.log('block', res.blockNumber);
};

main()
  .catch(err => console.error(err));