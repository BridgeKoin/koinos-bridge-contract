import { System, Protobuf, authority } from "@koinos/sdk-as";
import { Bridge as ContractClass } from "./Bridge";
import { bridge as ProtoNamespace } from "./proto/bridge";

export function main(): i32 {
  const contractArgs = System.getArguments();
  let retbuf = new Uint8Array(1024);

  const c = new ContractClass();

  switch (contractArgs.entry_point) {
    case 0x470ebe82: {
      const args = Protobuf.decode<ProtoNamespace.initialize_arguments>(
        contractArgs.args,
        ProtoNamespace.initialize_arguments.decode
      );
      const res = c.initialize(args);
      retbuf = Protobuf.encode(res, ProtoNamespace.empty_object.encode);
      break;
    }

    case 0x50068f92: {
      const args = Protobuf.decode<ProtoNamespace.get_validators_arguments>(
        contractArgs.args,
        ProtoNamespace.get_validators_arguments.decode
      );
      const res = c.get_validators(args);
      retbuf = Protobuf.encode(res, ProtoNamespace.repeated_addresses.encode);
      break;
    }

    case 0xc8e36f04: {
      const args =
        Protobuf.decode<ProtoNamespace.get_supported_tokens_arguments>(
          contractArgs.args,
          ProtoNamespace.get_supported_tokens_arguments.decode
        );
      const res = c.get_supported_tokens(args);
      retbuf = Protobuf.encode(res, ProtoNamespace.repeated_addresses.encode);
      break;
    }

    case 0xfde4e676: {
      const args = Protobuf.decode<ProtoNamespace.get_fee_token_arguments>(
        contractArgs.args,
        ProtoNamespace.get_fee_token_arguments.decode
      );
      const res = c.get_fee_token(args);
      retbuf = Protobuf.encode(res, ProtoNamespace.fees_object.encode);
      break;
    }

    case 0x2f540a24: {
      const args =
        Protobuf.decode<ProtoNamespace.get_supported_wrapped_tokens_arguments>(
          contractArgs.args,
          ProtoNamespace.get_supported_wrapped_tokens_arguments.decode
        );
      const res = c.get_supported_wrapped_tokens(args);
      retbuf = Protobuf.encode(res, ProtoNamespace.repeated_addresses.encode);
      break;
    }

    case 0xaefed58c: {
      const args =
        Protobuf.decode<ProtoNamespace.get_fee_wrapped_token_arguments>(
          contractArgs.args,
          ProtoNamespace.get_fee_wrapped_token_arguments.decode
        );
      const res = c.get_fee_wrapped_token(args);
      retbuf = Protobuf.encode(res, ProtoNamespace.fees_object.encode);
      break;
    }

    case 0xfcf7a68f: {
      const args = Protobuf.decode<ProtoNamespace.get_metadata_arguments>(
        contractArgs.args,
        ProtoNamespace.get_metadata_arguments.decode
      );
      const res = c.get_metadata(args);
      retbuf = Protobuf.encode(res, ProtoNamespace.metadata_object.encode);
      break;
    }

    case 0x39a2c4e4: {
      const args = Protobuf.decode<ProtoNamespace.set_pause_arguments>(
        contractArgs.args,
        ProtoNamespace.set_pause_arguments.decode
      );
      const res = c.set_pause(args);
      retbuf = Protobuf.encode(res, ProtoNamespace.empty_object.encode);
      break;
    }

    case 0x1d2e4ff3: {
      const args = Protobuf.decode<ProtoNamespace.transfer_tokens_arguments>(
        contractArgs.args,
        ProtoNamespace.transfer_tokens_arguments.decode
      );
      const res = c.transfer_tokens(args);
      retbuf = Protobuf.encode(res, ProtoNamespace.empty_object.encode);
      break;
    }

    case 0x4d4d3ef9: {
      const args = Protobuf.decode<ProtoNamespace.complete_transfer_arguments>(
        contractArgs.args,
        ProtoNamespace.complete_transfer_arguments.decode
      );
      const res = c.complete_transfer(args);
      retbuf = Protobuf.encode(res, ProtoNamespace.empty_object.encode);
      break;
    }

    case 0xfc15f1be: {
      const args = Protobuf.decode<ProtoNamespace.add_validator_arguments>(
        contractArgs.args,
        ProtoNamespace.add_validator_arguments.decode
      );
      const res = c.add_validator(args);
      retbuf = Protobuf.encode(res, ProtoNamespace.empty_object.encode);
      break;
    }

    case 0xff61ff26: {
      const args = Protobuf.decode<ProtoNamespace.remove_validator_arguments>(
        contractArgs.args,
        ProtoNamespace.remove_validator_arguments.decode
      );
      const res = c.remove_validator(args);
      retbuf = Protobuf.encode(res, ProtoNamespace.empty_object.encode);
      break;
    }

    case 0xc5ce0923: {
      const args =
        Protobuf.decode<ProtoNamespace.add_supported_token_arguments>(
          contractArgs.args,
          ProtoNamespace.add_supported_token_arguments.decode
        );
      const res = c.add_supported_token(args);
      retbuf = Protobuf.encode(res, ProtoNamespace.empty_object.encode);
      break;
    }

    case 0xfb6b2fbf: {
      const args = Protobuf.decode<ProtoNamespace.set_fee_token_arguments>(
        contractArgs.args,
        ProtoNamespace.set_fee_token_arguments.decode
      );
      const res = c.set_fee_token(args);
      retbuf = Protobuf.encode(res, ProtoNamespace.empty_object.encode);
      break;
    }

    case 0x9fc52541: {
      const args = Protobuf.decode<ProtoNamespace.claim_fee_token_arguments>(
        contractArgs.args,
        ProtoNamespace.claim_fee_token_arguments.decode
      );
      const res = c.claim_fee_token(args);
      retbuf = Protobuf.encode(res, ProtoNamespace.empty_object.encode);
      break;
    }

    case 0x2d3a597e: {
      const args =
        Protobuf.decode<ProtoNamespace.remove_supported_token_arguments>(
          contractArgs.args,
          ProtoNamespace.remove_supported_token_arguments.decode
        );
      const res = c.remove_supported_token(args);
      retbuf = Protobuf.encode(res, ProtoNamespace.empty_object.encode);
      break;
    }

    case 0x5457c617: {
      const args =
        Protobuf.decode<ProtoNamespace.add_supported_wrapped_token_arguments>(
          contractArgs.args,
          ProtoNamespace.add_supported_wrapped_token_arguments.decode
        );
      const res = c.add_supported_wrapped_token(args);
      retbuf = Protobuf.encode(res, ProtoNamespace.empty_object.encode);
      break;
    }

    case 0x927c7515: {
      const args =
        Protobuf.decode<ProtoNamespace.remove_supported_wrapped_token_arguments>(
          contractArgs.args,
          ProtoNamespace.remove_supported_wrapped_token_arguments.decode
        );
      const res = c.remove_supported_wrapped_token(args);
      retbuf = Protobuf.encode(res, ProtoNamespace.empty_object.encode);
      break;
    }

    case 0x9e53fa2f: {
      const args =
        Protobuf.decode<ProtoNamespace.set_fee_wrapped_token_arguments>(
          contractArgs.args,
          ProtoNamespace.set_fee_wrapped_token_arguments.decode
        );
      const res = c.set_fee_wrapped_token(args);
      retbuf = Protobuf.encode(res, ProtoNamespace.empty_object.encode);
      break;
    }

    case 0x5431db6c: {
      const args =
        Protobuf.decode<ProtoNamespace.claim_fee_wrapped_token_arguments>(
          contractArgs.args,
          ProtoNamespace.claim_fee_wrapped_token_arguments.decode
        );
      const res = c.claim_fee_wrapped_token(args);
      retbuf = Protobuf.encode(res, ProtoNamespace.empty_object.encode);
      break;
    }

    case 0x97bbe8a6: {
      const args =
        Protobuf.decode<ProtoNamespace.request_new_signatures_arguments>(
          contractArgs.args,
          ProtoNamespace.request_new_signatures_arguments.decode
        );
      const res = c.request_new_signatures(args);
      retbuf = Protobuf.encode(res, ProtoNamespace.empty_object.encode);
      break;
    }

    case 0x27ff4bd5: {
      const args =
        Protobuf.decode<ProtoNamespace.get_transfer_status_arguments>(
          contractArgs.args,
          ProtoNamespace.get_transfer_status_arguments.decode
        );
      const res = c.get_transfer_status(args);
      retbuf = Protobuf.encode(res, ProtoNamespace.boole.encode);
      break;
    }

    default:
      System.exit(1);
      break;
  }

  System.exit(0, retbuf);
  return 0;
}

main();
