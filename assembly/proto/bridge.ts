import { Writer, Reader } from "as-proto";

export namespace bridge {
  export class repeated_addresses {
    static encode(message: repeated_addresses, writer: Writer): void {
      const unique_name_addresses = message.addresses;
      if (unique_name_addresses.length !== 0) {
        for (let i = 0; i < unique_name_addresses.length; ++i) {
          writer.uint32(10);
          writer.bytes(unique_name_addresses[i]);
        }
      }
    }

    static decode(reader: Reader, length: i32): repeated_addresses {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new repeated_addresses();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.addresses.push(reader.bytes());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    addresses: Array<Uint8Array>;

    constructor(addresses: Array<Uint8Array> = []) {
      this.addresses = addresses;
    }
  }

  @unmanaged
  export class metadata_object {
    static encode(message: metadata_object, writer: Writer): void {
      if (message.initialized != false) {
        writer.uint32(8);
        writer.bool(message.initialized);
      }

      if (message.nonce != 0) {
        writer.uint32(16);
        writer.uint64(message.nonce);
      }

      if (message.chain_id != 0) {
        writer.uint32(24);
        writer.uint32(message.chain_id);
      }

      if (message.nb_validators != 0) {
        writer.uint32(32);
        writer.uint32(message.nb_validators);
      }
    }

    static decode(reader: Reader, length: i32): metadata_object {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new metadata_object();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.initialized = reader.bool();
            break;

          case 2:
            message.nonce = reader.uint64();
            break;

          case 3:
            message.chain_id = reader.uint32();
            break;

          case 4:
            message.nb_validators = reader.uint32();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    initialized: bool;
    nonce: u64;
    chain_id: u32;
    nb_validators: u32;

    constructor(
      initialized: bool = false,
      nonce: u64 = 0,
      chain_id: u32 = 0,
      nb_validators: u32 = 0
    ) {
      this.initialized = initialized;
      this.nonce = nonce;
      this.chain_id = chain_id;
      this.nb_validators = nb_validators;
    }
  }

  @unmanaged
  export class empty_object {
    static encode(message: empty_object, writer: Writer): void {}

    static decode(reader: Reader, length: i32): empty_object {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new empty_object();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    constructor() {}
  }

  @unmanaged
  export class boole {
    static encode(message: boole, writer: Writer): void {
      if (message.value != false) {
        writer.uint32(8);
        writer.bool(message.value);
      }
    }

    static decode(reader: Reader, length: i32): boole {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new boole();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: bool;

    constructor(value: bool = false) {
      this.value = value;
    }
  }

  @unmanaged
  export class fees_object {
    static encode(message: fees_object, writer: Writer): void {
      if (message.value != 0) {
        writer.uint32(16);
        writer.uint64(message.value);
      }

      if (message.balance != 0) {
        writer.uint32(24);
        writer.uint64(message.balance);
      }
    }

    static decode(reader: Reader, length: i32): fees_object {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new fees_object();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 2:
            message.value = reader.uint64();
            break;

          case 3:
            message.balance = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: u64;
    balance: u64;

    constructor(value: u64 = 0, balance: u64 = 0) {
      this.value = value;
      this.balance = balance;
    }
  }

  export class initialize_arguments {
    static encode(message: initialize_arguments, writer: Writer): void {
      if (message.chain_id != 0) {
        writer.uint32(8);
        writer.uint32(message.chain_id);
      }

      const unique_name_initial_validators = message.initial_validators;
      if (unique_name_initial_validators.length !== 0) {
        for (let i = 0; i < unique_name_initial_validators.length; ++i) {
          writer.uint32(18);
          writer.bytes(unique_name_initial_validators[i]);
        }
      }
    }

    static decode(reader: Reader, length: i32): initialize_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new initialize_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.chain_id = reader.uint32();
            break;

          case 2:
            message.initial_validators.push(reader.bytes());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    chain_id: u32;
    initial_validators: Array<Uint8Array>;

    constructor(chain_id: u32 = 0, initial_validators: Array<Uint8Array> = []) {
      this.chain_id = chain_id;
      this.initial_validators = initial_validators;
    }
  }

  export class get_validators_arguments {
    static encode(message: get_validators_arguments, writer: Writer): void {
      if (message.start.length != 0) {
        writer.uint32(10);
        writer.bytes(message.start);
      }

      if (message.limit != 0) {
        writer.uint32(16);
        writer.int32(message.limit);
      }

      if (message.descending != false) {
        writer.uint32(24);
        writer.bool(message.descending);
      }
    }

    static decode(reader: Reader, length: i32): get_validators_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_validators_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.start = reader.bytes();
            break;

          case 2:
            message.limit = reader.int32();
            break;

          case 3:
            message.descending = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    start: Uint8Array;
    limit: i32;
    descending: bool;

    constructor(
      start: Uint8Array = new Uint8Array(0),
      limit: i32 = 0,
      descending: bool = false
    ) {
      this.start = start;
      this.limit = limit;
      this.descending = descending;
    }
  }

  export class get_supported_tokens_arguments {
    static encode(
      message: get_supported_tokens_arguments,
      writer: Writer
    ): void {
      if (message.start.length != 0) {
        writer.uint32(10);
        writer.bytes(message.start);
      }

      if (message.limit != 0) {
        writer.uint32(16);
        writer.int32(message.limit);
      }

      if (message.descending != false) {
        writer.uint32(24);
        writer.bool(message.descending);
      }
    }

    static decode(reader: Reader, length: i32): get_supported_tokens_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_supported_tokens_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.start = reader.bytes();
            break;

          case 2:
            message.limit = reader.int32();
            break;

          case 3:
            message.descending = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    start: Uint8Array;
    limit: i32;
    descending: bool;

    constructor(
      start: Uint8Array = new Uint8Array(0),
      limit: i32 = 0,
      descending: bool = false
    ) {
      this.start = start;
      this.limit = limit;
      this.descending = descending;
    }
  }

  export class get_fee_token_arguments {
    static encode(message: get_fee_token_arguments, writer: Writer): void {
      if (message.token.length != 0) {
        writer.uint32(10);
        writer.bytes(message.token);
      }
    }

    static decode(reader: Reader, length: i32): get_fee_token_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_fee_token_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.token = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    token: Uint8Array;

    constructor(token: Uint8Array = new Uint8Array(0)) {
      this.token = token;
    }
  }

  export class get_supported_wrapped_tokens_arguments {
    static encode(
      message: get_supported_wrapped_tokens_arguments,
      writer: Writer
    ): void {
      if (message.start.length != 0) {
        writer.uint32(10);
        writer.bytes(message.start);
      }

      if (message.limit != 0) {
        writer.uint32(16);
        writer.int32(message.limit);
      }

      if (message.descending != false) {
        writer.uint32(24);
        writer.bool(message.descending);
      }
    }

    static decode(
      reader: Reader,
      length: i32
    ): get_supported_wrapped_tokens_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_supported_wrapped_tokens_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.start = reader.bytes();
            break;

          case 2:
            message.limit = reader.int32();
            break;

          case 3:
            message.descending = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    start: Uint8Array;
    limit: i32;
    descending: bool;

    constructor(
      start: Uint8Array = new Uint8Array(0),
      limit: i32 = 0,
      descending: bool = false
    ) {
      this.start = start;
      this.limit = limit;
      this.descending = descending;
    }
  }

  export class get_fee_wrapped_token_arguments {
    static encode(
      message: get_fee_wrapped_token_arguments,
      writer: Writer
    ): void {
      if (message.token.length != 0) {
        writer.uint32(10);
        writer.bytes(message.token);
      }
    }

    static decode(
      reader: Reader,
      length: i32
    ): get_fee_wrapped_token_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_fee_wrapped_token_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.token = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    token: Uint8Array;

    constructor(token: Uint8Array = new Uint8Array(0)) {
      this.token = token;
    }
  }

  @unmanaged
  export class get_metadata_arguments {
    static encode(message: get_metadata_arguments, writer: Writer): void {}

    static decode(reader: Reader, length: i32): get_metadata_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_metadata_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    constructor() {}
  }

  export class set_pause_arguments {
    static encode(message: set_pause_arguments, writer: Writer): void {
      const unique_name_signatures = message.signatures;
      if (unique_name_signatures.length !== 0) {
        for (let i = 0; i < unique_name_signatures.length; ++i) {
          writer.uint32(10);
          writer.bytes(unique_name_signatures[i]);
        }
      }

      if (message.pause != false) {
        writer.uint32(16);
        writer.bool(message.pause);
      }

      if (message.expiration != 0) {
        writer.uint32(24);
        writer.uint64(message.expiration);
      }
    }

    static decode(reader: Reader, length: i32): set_pause_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new set_pause_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.signatures.push(reader.bytes());
            break;

          case 2:
            message.pause = reader.bool();
            break;

          case 3:
            message.expiration = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    signatures: Array<Uint8Array>;
    pause: bool;
    expiration: u64;

    constructor(
      signatures: Array<Uint8Array> = [],
      pause: bool = false,
      expiration: u64 = 0
    ) {
      this.signatures = signatures;
      this.pause = pause;
      this.expiration = expiration;
    }
  }

  export class transfer_tokens_arguments {
    static encode(message: transfer_tokens_arguments, writer: Writer): void {
      if (message.from.length != 0) {
        writer.uint32(10);
        writer.bytes(message.from);
      }

      if (message.token.length != 0) {
        writer.uint32(18);
        writer.bytes(message.token);
      }

      if (message.amount != 0) {
        writer.uint32(24);
        writer.uint64(message.amount);
      }

      if (message.payment != 0) {
        writer.uint32(32);
        writer.uint64(message.payment);
      }

      if (message.relayer.length != 0) {
        writer.uint32(42);
        writer.string(message.relayer);
      }

      if (message.recipient.length != 0) {
        writer.uint32(50);
        writer.string(message.recipient);
      }

      if (message.metadata.length != 0) {
        writer.uint32(58);
        writer.string(message.metadata);
      }

      if (message.to_chain != 0) {
        writer.uint32(64);
        writer.uint32(message.to_chain);
      }
    }

    static decode(reader: Reader, length: i32): transfer_tokens_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new transfer_tokens_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.from = reader.bytes();
            break;

          case 2:
            message.token = reader.bytes();
            break;

          case 3:
            message.amount = reader.uint64();
            break;

          case 4:
            message.payment = reader.uint64();
            break;

          case 5:
            message.relayer = reader.string();
            break;

          case 6:
            message.recipient = reader.string();
            break;

          case 7:
            message.metadata = reader.string();
            break;

          case 8:
            message.to_chain = reader.uint32();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    from: Uint8Array;
    token: Uint8Array;
    amount: u64;
    payment: u64;
    relayer: string;
    recipient: string;
    metadata: string;
    to_chain: u32;

    constructor(
      from: Uint8Array = new Uint8Array(0),
      token: Uint8Array = new Uint8Array(0),
      amount: u64 = 0,
      payment: u64 = 0,
      relayer: string = "",
      recipient: string = "",
      metadata: string = "",
      to_chain: u32 = 0
    ) {
      this.from = from;
      this.token = token;
      this.amount = amount;
      this.payment = payment;
      this.relayer = relayer;
      this.recipient = recipient;
      this.metadata = metadata;
      this.to_chain = to_chain;
    }
  }

  export class complete_transfer_arguments {
    static encode(message: complete_transfer_arguments, writer: Writer): void {
      if (message.transaction_id.length != 0) {
        writer.uint32(10);
        writer.bytes(message.transaction_id);
      }

      if (message.token.length != 0) {
        writer.uint32(18);
        writer.bytes(message.token);
      }

      if (message.relayer.length != 0) {
        writer.uint32(26);
        writer.bytes(message.relayer);
      }

      if (message.recipient.length != 0) {
        writer.uint32(34);
        writer.bytes(message.recipient);
      }

      if (message.value != 0) {
        writer.uint32(40);
        writer.uint64(message.value);
      }

      if (message.payment != 0) {
        writer.uint32(48);
        writer.uint64(message.payment);
      }

      if (message.metadata.length != 0) {
        writer.uint32(58);
        writer.string(message.metadata);
      }

      const unique_name_signatures = message.signatures;
      if (unique_name_signatures.length !== 0) {
        for (let i = 0; i < unique_name_signatures.length; ++i) {
          writer.uint32(66);
          writer.bytes(unique_name_signatures[i]);
        }
      }

      if (message.expiration != 0) {
        writer.uint32(72);
        writer.uint64(message.expiration);
      }
    }

    static decode(reader: Reader, length: i32): complete_transfer_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new complete_transfer_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.transaction_id = reader.bytes();
            break;

          case 2:
            message.token = reader.bytes();
            break;

          case 3:
            message.relayer = reader.bytes();
            break;

          case 4:
            message.recipient = reader.bytes();
            break;

          case 5:
            message.value = reader.uint64();
            break;

          case 6:
            message.payment = reader.uint64();
            break;

          case 7:
            message.metadata = reader.string();
            break;

          case 8:
            message.signatures.push(reader.bytes());
            break;

          case 9:
            message.expiration = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    transaction_id: Uint8Array;
    token: Uint8Array;
    relayer: Uint8Array;
    recipient: Uint8Array;
    value: u64;
    payment: u64;
    metadata: string;
    signatures: Array<Uint8Array>;
    expiration: u64;

    constructor(
      transaction_id: Uint8Array = new Uint8Array(0),
      token: Uint8Array = new Uint8Array(0),
      relayer: Uint8Array = new Uint8Array(0),
      recipient: Uint8Array = new Uint8Array(0),
      value: u64 = 0,
      payment: u64 = 0,
      metadata: string = "",
      signatures: Array<Uint8Array> = [],
      expiration: u64 = 0
    ) {
      this.transaction_id = transaction_id;
      this.token = token;
      this.relayer = relayer;
      this.recipient = recipient;
      this.value = value;
      this.payment = payment;
      this.metadata = metadata;
      this.signatures = signatures;
      this.expiration = expiration;
    }
  }

  export class add_validator_arguments {
    static encode(message: add_validator_arguments, writer: Writer): void {
      const unique_name_signatures = message.signatures;
      if (unique_name_signatures.length !== 0) {
        for (let i = 0; i < unique_name_signatures.length; ++i) {
          writer.uint32(10);
          writer.bytes(unique_name_signatures[i]);
        }
      }

      if (message.validator.length != 0) {
        writer.uint32(18);
        writer.bytes(message.validator);
      }

      if (message.expiration != 0) {
        writer.uint32(24);
        writer.uint64(message.expiration);
      }
    }

    static decode(reader: Reader, length: i32): add_validator_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new add_validator_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.signatures.push(reader.bytes());
            break;

          case 2:
            message.validator = reader.bytes();
            break;

          case 3:
            message.expiration = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    signatures: Array<Uint8Array>;
    validator: Uint8Array;
    expiration: u64;

    constructor(
      signatures: Array<Uint8Array> = [],
      validator: Uint8Array = new Uint8Array(0),
      expiration: u64 = 0
    ) {
      this.signatures = signatures;
      this.validator = validator;
      this.expiration = expiration;
    }
  }

  export class remove_validator_arguments {
    static encode(message: remove_validator_arguments, writer: Writer): void {
      const unique_name_signatures = message.signatures;
      if (unique_name_signatures.length !== 0) {
        for (let i = 0; i < unique_name_signatures.length; ++i) {
          writer.uint32(10);
          writer.bytes(unique_name_signatures[i]);
        }
      }

      if (message.validator.length != 0) {
        writer.uint32(18);
        writer.bytes(message.validator);
      }

      if (message.expiration != 0) {
        writer.uint32(24);
        writer.uint64(message.expiration);
      }
    }

    static decode(reader: Reader, length: i32): remove_validator_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new remove_validator_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.signatures.push(reader.bytes());
            break;

          case 2:
            message.validator = reader.bytes();
            break;

          case 3:
            message.expiration = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    signatures: Array<Uint8Array>;
    validator: Uint8Array;
    expiration: u64;

    constructor(
      signatures: Array<Uint8Array> = [],
      validator: Uint8Array = new Uint8Array(0),
      expiration: u64 = 0
    ) {
      this.signatures = signatures;
      this.validator = validator;
      this.expiration = expiration;
    }
  }

  export class add_supported_token_arguments {
    static encode(
      message: add_supported_token_arguments,
      writer: Writer
    ): void {
      const unique_name_signatures = message.signatures;
      if (unique_name_signatures.length !== 0) {
        for (let i = 0; i < unique_name_signatures.length; ++i) {
          writer.uint32(10);
          writer.bytes(unique_name_signatures[i]);
        }
      }

      if (message.token.length != 0) {
        writer.uint32(18);
        writer.bytes(message.token);
      }

      if (message.expiration != 0) {
        writer.uint32(24);
        writer.uint64(message.expiration);
      }
    }

    static decode(reader: Reader, length: i32): add_supported_token_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new add_supported_token_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.signatures.push(reader.bytes());
            break;

          case 2:
            message.token = reader.bytes();
            break;

          case 3:
            message.expiration = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    signatures: Array<Uint8Array>;
    token: Uint8Array;
    expiration: u64;

    constructor(
      signatures: Array<Uint8Array> = [],
      token: Uint8Array = new Uint8Array(0),
      expiration: u64 = 0
    ) {
      this.signatures = signatures;
      this.token = token;
      this.expiration = expiration;
    }
  }

  export class set_fee_token_arguments {
    static encode(message: set_fee_token_arguments, writer: Writer): void {
      const unique_name_signatures = message.signatures;
      if (unique_name_signatures.length !== 0) {
        for (let i = 0; i < unique_name_signatures.length; ++i) {
          writer.uint32(10);
          writer.bytes(unique_name_signatures[i]);
        }
      }

      if (message.token.length != 0) {
        writer.uint32(18);
        writer.bytes(message.token);
      }

      if (message.fee != 0) {
        writer.uint32(24);
        writer.uint64(message.fee);
      }

      if (message.expiration != 0) {
        writer.uint32(32);
        writer.uint64(message.expiration);
      }
    }

    static decode(reader: Reader, length: i32): set_fee_token_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new set_fee_token_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.signatures.push(reader.bytes());
            break;

          case 2:
            message.token = reader.bytes();
            break;

          case 3:
            message.fee = reader.uint64();
            break;

          case 4:
            message.expiration = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    signatures: Array<Uint8Array>;
    token: Uint8Array;
    fee: u64;
    expiration: u64;

    constructor(
      signatures: Array<Uint8Array> = [],
      token: Uint8Array = new Uint8Array(0),
      fee: u64 = 0,
      expiration: u64 = 0
    ) {
      this.signatures = signatures;
      this.token = token;
      this.fee = fee;
      this.expiration = expiration;
    }
  }

  export class claim_fee_token_arguments {
    static encode(message: claim_fee_token_arguments, writer: Writer): void {
      const unique_name_signatures = message.signatures;
      if (unique_name_signatures.length !== 0) {
        for (let i = 0; i < unique_name_signatures.length; ++i) {
          writer.uint32(10);
          writer.bytes(unique_name_signatures[i]);
        }
      }

      if (message.token.length != 0) {
        writer.uint32(18);
        writer.bytes(message.token);
      }

      if (message.wallet.length != 0) {
        writer.uint32(26);
        writer.bytes(message.wallet);
      }

      if (message.expiration != 0) {
        writer.uint32(32);
        writer.uint64(message.expiration);
      }
    }

    static decode(reader: Reader, length: i32): claim_fee_token_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new claim_fee_token_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.signatures.push(reader.bytes());
            break;

          case 2:
            message.token = reader.bytes();
            break;

          case 3:
            message.wallet = reader.bytes();
            break;

          case 4:
            message.expiration = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    signatures: Array<Uint8Array>;
    token: Uint8Array;
    wallet: Uint8Array;
    expiration: u64;

    constructor(
      signatures: Array<Uint8Array> = [],
      token: Uint8Array = new Uint8Array(0),
      wallet: Uint8Array = new Uint8Array(0),
      expiration: u64 = 0
    ) {
      this.signatures = signatures;
      this.token = token;
      this.wallet = wallet;
      this.expiration = expiration;
    }
  }

  export class remove_supported_token_arguments {
    static encode(
      message: remove_supported_token_arguments,
      writer: Writer
    ): void {
      const unique_name_signatures = message.signatures;
      if (unique_name_signatures.length !== 0) {
        for (let i = 0; i < unique_name_signatures.length; ++i) {
          writer.uint32(10);
          writer.bytes(unique_name_signatures[i]);
        }
      }

      if (message.token.length != 0) {
        writer.uint32(18);
        writer.bytes(message.token);
      }

      if (message.expiration != 0) {
        writer.uint32(24);
        writer.uint64(message.expiration);
      }
    }

    static decode(
      reader: Reader,
      length: i32
    ): remove_supported_token_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new remove_supported_token_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.signatures.push(reader.bytes());
            break;

          case 2:
            message.token = reader.bytes();
            break;

          case 3:
            message.expiration = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    signatures: Array<Uint8Array>;
    token: Uint8Array;
    expiration: u64;

    constructor(
      signatures: Array<Uint8Array> = [],
      token: Uint8Array = new Uint8Array(0),
      expiration: u64 = 0
    ) {
      this.signatures = signatures;
      this.token = token;
      this.expiration = expiration;
    }
  }

  export class add_supported_wrapped_token_arguments {
    static encode(
      message: add_supported_wrapped_token_arguments,
      writer: Writer
    ): void {
      const unique_name_signatures = message.signatures;
      if (unique_name_signatures.length !== 0) {
        for (let i = 0; i < unique_name_signatures.length; ++i) {
          writer.uint32(10);
          writer.bytes(unique_name_signatures[i]);
        }
      }

      if (message.token.length != 0) {
        writer.uint32(18);
        writer.bytes(message.token);
      }

      if (message.expiration != 0) {
        writer.uint32(24);
        writer.uint64(message.expiration);
      }
    }

    static decode(
      reader: Reader,
      length: i32
    ): add_supported_wrapped_token_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new add_supported_wrapped_token_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.signatures.push(reader.bytes());
            break;

          case 2:
            message.token = reader.bytes();
            break;

          case 3:
            message.expiration = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    signatures: Array<Uint8Array>;
    token: Uint8Array;
    expiration: u64;

    constructor(
      signatures: Array<Uint8Array> = [],
      token: Uint8Array = new Uint8Array(0),
      expiration: u64 = 0
    ) {
      this.signatures = signatures;
      this.token = token;
      this.expiration = expiration;
    }
  }

  export class remove_supported_wrapped_token_arguments {
    static encode(
      message: remove_supported_wrapped_token_arguments,
      writer: Writer
    ): void {
      const unique_name_signatures = message.signatures;
      if (unique_name_signatures.length !== 0) {
        for (let i = 0; i < unique_name_signatures.length; ++i) {
          writer.uint32(10);
          writer.bytes(unique_name_signatures[i]);
        }
      }

      if (message.token.length != 0) {
        writer.uint32(18);
        writer.bytes(message.token);
      }

      if (message.expiration != 0) {
        writer.uint32(24);
        writer.uint64(message.expiration);
      }
    }

    static decode(
      reader: Reader,
      length: i32
    ): remove_supported_wrapped_token_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new remove_supported_wrapped_token_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.signatures.push(reader.bytes());
            break;

          case 2:
            message.token = reader.bytes();
            break;

          case 3:
            message.expiration = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    signatures: Array<Uint8Array>;
    token: Uint8Array;
    expiration: u64;

    constructor(
      signatures: Array<Uint8Array> = [],
      token: Uint8Array = new Uint8Array(0),
      expiration: u64 = 0
    ) {
      this.signatures = signatures;
      this.token = token;
      this.expiration = expiration;
    }
  }

  export class set_fee_wrapped_token_arguments {
    static encode(
      message: set_fee_wrapped_token_arguments,
      writer: Writer
    ): void {
      const unique_name_signatures = message.signatures;
      if (unique_name_signatures.length !== 0) {
        for (let i = 0; i < unique_name_signatures.length; ++i) {
          writer.uint32(10);
          writer.bytes(unique_name_signatures[i]);
        }
      }

      if (message.token.length != 0) {
        writer.uint32(18);
        writer.bytes(message.token);
      }

      if (message.fee != 0) {
        writer.uint32(24);
        writer.uint64(message.fee);
      }

      if (message.expiration != 0) {
        writer.uint32(32);
        writer.uint64(message.expiration);
      }
    }

    static decode(
      reader: Reader,
      length: i32
    ): set_fee_wrapped_token_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new set_fee_wrapped_token_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.signatures.push(reader.bytes());
            break;

          case 2:
            message.token = reader.bytes();
            break;

          case 3:
            message.fee = reader.uint64();
            break;

          case 4:
            message.expiration = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    signatures: Array<Uint8Array>;
    token: Uint8Array;
    fee: u64;
    expiration: u64;

    constructor(
      signatures: Array<Uint8Array> = [],
      token: Uint8Array = new Uint8Array(0),
      fee: u64 = 0,
      expiration: u64 = 0
    ) {
      this.signatures = signatures;
      this.token = token;
      this.fee = fee;
      this.expiration = expiration;
    }
  }

  export class claim_fee_wrapped_token_arguments {
    static encode(
      message: claim_fee_wrapped_token_arguments,
      writer: Writer
    ): void {
      const unique_name_signatures = message.signatures;
      if (unique_name_signatures.length !== 0) {
        for (let i = 0; i < unique_name_signatures.length; ++i) {
          writer.uint32(10);
          writer.bytes(unique_name_signatures[i]);
        }
      }

      if (message.token.length != 0) {
        writer.uint32(18);
        writer.bytes(message.token);
      }

      if (message.wallet.length != 0) {
        writer.uint32(26);
        writer.bytes(message.wallet);
      }

      if (message.expiration != 0) {
        writer.uint32(32);
        writer.uint64(message.expiration);
      }
    }

    static decode(
      reader: Reader,
      length: i32
    ): claim_fee_wrapped_token_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new claim_fee_wrapped_token_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.signatures.push(reader.bytes());
            break;

          case 2:
            message.token = reader.bytes();
            break;

          case 3:
            message.wallet = reader.bytes();
            break;

          case 4:
            message.expiration = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    signatures: Array<Uint8Array>;
    token: Uint8Array;
    wallet: Uint8Array;
    expiration: u64;

    constructor(
      signatures: Array<Uint8Array> = [],
      token: Uint8Array = new Uint8Array(0),
      wallet: Uint8Array = new Uint8Array(0),
      expiration: u64 = 0
    ) {
      this.signatures = signatures;
      this.token = token;
      this.wallet = wallet;
      this.expiration = expiration;
    }
  }

  export class request_new_signatures_arguments {
    static encode(
      message: request_new_signatures_arguments,
      writer: Writer
    ): void {
      if (message.transaction_id.length != 0) {
        writer.uint32(10);
        writer.string(message.transaction_id);
      }

      if (message.operation_id.length != 0) {
        writer.uint32(18);
        writer.string(message.operation_id);
      }
    }

    static decode(
      reader: Reader,
      length: i32
    ): request_new_signatures_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new request_new_signatures_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.transaction_id = reader.string();
            break;

          case 2:
            message.operation_id = reader.string();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    transaction_id: string;
    operation_id: string;

    constructor(transaction_id: string = "", operation_id: string = "") {
      this.transaction_id = transaction_id;
      this.operation_id = operation_id;
    }
  }

  export class get_transfer_status_arguments {
    static encode(
      message: get_transfer_status_arguments,
      writer: Writer
    ): void {
      if (message.transaction_id.length != 0) {
        writer.uint32(10);
        writer.bytes(message.transaction_id);
      }
    }

    static decode(reader: Reader, length: i32): get_transfer_status_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_transfer_status_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.transaction_id = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    transaction_id: Uint8Array;

    constructor(transaction_id: Uint8Array = new Uint8Array(0)) {
      this.transaction_id = transaction_id;
    }
  }

  export class tokens_locked_event {
    static encode(message: tokens_locked_event, writer: Writer): void {
      if (message.from.length != 0) {
        writer.uint32(10);
        writer.bytes(message.from);
      }

      if (message.token.length != 0) {
        writer.uint32(18);
        writer.bytes(message.token);
      }

      if (message.amount.length != 0) {
        writer.uint32(26);
        writer.string(message.amount);
      }

      if (message.payment.length != 0) {
        writer.uint32(34);
        writer.string(message.payment);
      }

      if (message.relayer.length != 0) {
        writer.uint32(42);
        writer.string(message.relayer);
      }

      if (message.recipient.length != 0) {
        writer.uint32(50);
        writer.string(message.recipient);
      }

      if (message.metadata.length != 0) {
        writer.uint32(58);
        writer.string(message.metadata);
      }

      if (message.chain_id != 0) {
        writer.uint32(64);
        writer.uint32(message.chain_id);
      }
    }

    static decode(reader: Reader, length: i32): tokens_locked_event {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new tokens_locked_event();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.from = reader.bytes();
            break;

          case 2:
            message.token = reader.bytes();
            break;

          case 3:
            message.amount = reader.string();
            break;

          case 4:
            message.payment = reader.string();
            break;

          case 5:
            message.relayer = reader.string();
            break;

          case 6:
            message.recipient = reader.string();
            break;

          case 7:
            message.metadata = reader.string();
            break;

          case 8:
            message.chain_id = reader.uint32();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    from: Uint8Array;
    token: Uint8Array;
    amount: string;
    payment: string;
    relayer: string;
    recipient: string;
    metadata: string;
    chain_id: u32;

    constructor(
      from: Uint8Array = new Uint8Array(0),
      token: Uint8Array = new Uint8Array(0),
      amount: string = "",
      payment: string = "",
      relayer: string = "",
      recipient: string = "",
      metadata: string = "",
      chain_id: u32 = 0
    ) {
      this.from = from;
      this.token = token;
      this.amount = amount;
      this.payment = payment;
      this.relayer = relayer;
      this.recipient = recipient;
      this.metadata = metadata;
      this.chain_id = chain_id;
    }
  }

  export class transfer_completed_event {
    static encode(message: transfer_completed_event, writer: Writer): void {
      if (message.tx_id.length != 0) {
        writer.uint32(10);
        writer.bytes(message.tx_id);
      }
    }

    static decode(reader: Reader, length: i32): transfer_completed_event {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new transfer_completed_event();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.tx_id = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    tx_id: Uint8Array;

    constructor(tx_id: Uint8Array = new Uint8Array(0)) {
      this.tx_id = tx_id;
    }
  }

  export class add_remove_action_hash {
    static encode(message: add_remove_action_hash, writer: Writer): void {
      if (message.action != 0) {
        writer.uint32(8);
        writer.int32(message.action);
      }

      if (message.address.length != 0) {
        writer.uint32(18);
        writer.bytes(message.address);
      }

      if (message.nonce != 0) {
        writer.uint32(24);
        writer.uint64(message.nonce);
      }

      if (message.contract_id.length != 0) {
        writer.uint32(34);
        writer.bytes(message.contract_id);
      }

      if (message.expiration != 0) {
        writer.uint32(40);
        writer.uint64(message.expiration);
      }

      if (message.chain != 0) {
        writer.uint32(48);
        writer.uint32(message.chain);
      }
    }

    static decode(reader: Reader, length: i32): add_remove_action_hash {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new add_remove_action_hash();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.action = reader.int32();
            break;

          case 2:
            message.address = reader.bytes();
            break;

          case 3:
            message.nonce = reader.uint64();
            break;

          case 4:
            message.contract_id = reader.bytes();
            break;

          case 5:
            message.expiration = reader.uint64();
            break;

          case 6:
            message.chain = reader.uint32();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    action: action_id;
    address: Uint8Array;
    nonce: u64;
    contract_id: Uint8Array;
    expiration: u64;
    chain: u32;

    constructor(
      action: action_id = 0,
      address: Uint8Array = new Uint8Array(0),
      nonce: u64 = 0,
      contract_id: Uint8Array = new Uint8Array(0),
      expiration: u64 = 0,
      chain: u32 = 0
    ) {
      this.action = action;
      this.address = address;
      this.nonce = nonce;
      this.contract_id = contract_id;
      this.expiration = expiration;
      this.chain = chain;
    }
  }

  export class set_pause_action_hash {
    static encode(message: set_pause_action_hash, writer: Writer): void {
      if (message.action != 0) {
        writer.uint32(8);
        writer.int32(message.action);
      }

      if (message.pause != false) {
        writer.uint32(16);
        writer.bool(message.pause);
      }

      if (message.nonce != 0) {
        writer.uint32(24);
        writer.uint64(message.nonce);
      }

      if (message.contract_id.length != 0) {
        writer.uint32(34);
        writer.bytes(message.contract_id);
      }

      if (message.expiration != 0) {
        writer.uint32(40);
        writer.uint64(message.expiration);
      }

      if (message.chain != 0) {
        writer.uint32(48);
        writer.uint32(message.chain);
      }
    }

    static decode(reader: Reader, length: i32): set_pause_action_hash {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new set_pause_action_hash();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.action = reader.int32();
            break;

          case 2:
            message.pause = reader.bool();
            break;

          case 3:
            message.nonce = reader.uint64();
            break;

          case 4:
            message.contract_id = reader.bytes();
            break;

          case 5:
            message.expiration = reader.uint64();
            break;

          case 6:
            message.chain = reader.uint32();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    action: action_id;
    pause: bool;
    nonce: u64;
    contract_id: Uint8Array;
    expiration: u64;
    chain: u32;

    constructor(
      action: action_id = 0,
      pause: bool = false,
      nonce: u64 = 0,
      contract_id: Uint8Array = new Uint8Array(0),
      expiration: u64 = 0,
      chain: u32 = 0
    ) {
      this.action = action;
      this.pause = pause;
      this.nonce = nonce;
      this.contract_id = contract_id;
      this.expiration = expiration;
      this.chain = chain;
    }
  }

  export class complete_transfer_hash {
    static encode(message: complete_transfer_hash, writer: Writer): void {
      if (message.action != 0) {
        writer.uint32(8);
        writer.int32(message.action);
      }

      if (message.transaction_id.length != 0) {
        writer.uint32(18);
        writer.bytes(message.transaction_id);
      }

      if (message.token.length != 0) {
        writer.uint32(26);
        writer.bytes(message.token);
      }

      if (message.recipient.length != 0) {
        writer.uint32(34);
        writer.bytes(message.recipient);
      }

      if (message.relayer.length != 0) {
        writer.uint32(42);
        writer.bytes(message.relayer);
      }

      if (message.amount != 0) {
        writer.uint32(48);
        writer.uint64(message.amount);
      }

      if (message.payment != 0) {
        writer.uint32(56);
        writer.uint64(message.payment);
      }

      if (message.metadata.length != 0) {
        writer.uint32(66);
        writer.string(message.metadata);
      }

      if (message.contract_id.length != 0) {
        writer.uint32(74);
        writer.bytes(message.contract_id);
      }

      if (message.expiration != 0) {
        writer.uint32(80);
        writer.uint64(message.expiration);
      }

      if (message.chain != 0) {
        writer.uint32(88);
        writer.uint32(message.chain);
      }
    }

    static decode(reader: Reader, length: i32): complete_transfer_hash {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new complete_transfer_hash();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.action = reader.int32();
            break;

          case 2:
            message.transaction_id = reader.bytes();
            break;

          case 3:
            message.token = reader.bytes();
            break;

          case 4:
            message.recipient = reader.bytes();
            break;

          case 5:
            message.relayer = reader.bytes();
            break;

          case 6:
            message.amount = reader.uint64();
            break;

          case 7:
            message.payment = reader.uint64();
            break;

          case 8:
            message.metadata = reader.string();
            break;

          case 9:
            message.contract_id = reader.bytes();
            break;

          case 10:
            message.expiration = reader.uint64();
            break;

          case 11:
            message.chain = reader.uint32();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    action: action_id;
    transaction_id: Uint8Array;
    token: Uint8Array;
    recipient: Uint8Array;
    relayer: Uint8Array;
    amount: u64;
    payment: u64;
    metadata: string;
    contract_id: Uint8Array;
    expiration: u64;
    chain: u32;

    constructor(
      action: action_id = 0,
      transaction_id: Uint8Array = new Uint8Array(0),
      token: Uint8Array = new Uint8Array(0),
      recipient: Uint8Array = new Uint8Array(0),
      relayer: Uint8Array = new Uint8Array(0),
      amount: u64 = 0,
      payment: u64 = 0,
      metadata: string = "",
      contract_id: Uint8Array = new Uint8Array(0),
      expiration: u64 = 0,
      chain: u32 = 0
    ) {
      this.action = action;
      this.transaction_id = transaction_id;
      this.token = token;
      this.recipient = recipient;
      this.relayer = relayer;
      this.amount = amount;
      this.payment = payment;
      this.metadata = metadata;
      this.contract_id = contract_id;
      this.expiration = expiration;
      this.chain = chain;
    }
  }

  export class set_fee_hash {
    static encode(message: set_fee_hash, writer: Writer): void {
      if (message.action != 0) {
        writer.uint32(8);
        writer.int32(message.action);
      }

      if (message.token.length != 0) {
        writer.uint32(18);
        writer.bytes(message.token);
      }

      if (message.fee != 0) {
        writer.uint32(24);
        writer.uint64(message.fee);
      }

      if (message.nonce != 0) {
        writer.uint32(32);
        writer.uint64(message.nonce);
      }

      if (message.contract_id.length != 0) {
        writer.uint32(42);
        writer.bytes(message.contract_id);
      }

      if (message.expiration != 0) {
        writer.uint32(48);
        writer.uint64(message.expiration);
      }

      if (message.chain != 0) {
        writer.uint32(56);
        writer.uint32(message.chain);
      }
    }

    static decode(reader: Reader, length: i32): set_fee_hash {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new set_fee_hash();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.action = reader.int32();
            break;

          case 2:
            message.token = reader.bytes();
            break;

          case 3:
            message.fee = reader.uint64();
            break;

          case 4:
            message.nonce = reader.uint64();
            break;

          case 5:
            message.contract_id = reader.bytes();
            break;

          case 6:
            message.expiration = reader.uint64();
            break;

          case 7:
            message.chain = reader.uint32();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    action: action_id;
    token: Uint8Array;
    fee: u64;
    nonce: u64;
    contract_id: Uint8Array;
    expiration: u64;
    chain: u32;

    constructor(
      action: action_id = 0,
      token: Uint8Array = new Uint8Array(0),
      fee: u64 = 0,
      nonce: u64 = 0,
      contract_id: Uint8Array = new Uint8Array(0),
      expiration: u64 = 0,
      chain: u32 = 0
    ) {
      this.action = action;
      this.token = token;
      this.fee = fee;
      this.nonce = nonce;
      this.contract_id = contract_id;
      this.expiration = expiration;
      this.chain = chain;
    }
  }

  export class claim_fee_hash {
    static encode(message: claim_fee_hash, writer: Writer): void {
      if (message.action != 0) {
        writer.uint32(8);
        writer.int32(message.action);
      }

      if (message.token.length != 0) {
        writer.uint32(18);
        writer.bytes(message.token);
      }

      if (message.wallet.length != 0) {
        writer.uint32(26);
        writer.bytes(message.wallet);
      }

      if (message.nonce != 0) {
        writer.uint32(32);
        writer.uint64(message.nonce);
      }

      if (message.contract_id.length != 0) {
        writer.uint32(42);
        writer.bytes(message.contract_id);
      }

      if (message.expiration != 0) {
        writer.uint32(48);
        writer.uint64(message.expiration);
      }

      if (message.chain != 0) {
        writer.uint32(56);
        writer.uint32(message.chain);
      }
    }

    static decode(reader: Reader, length: i32): claim_fee_hash {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new claim_fee_hash();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.action = reader.int32();
            break;

          case 2:
            message.token = reader.bytes();
            break;

          case 3:
            message.wallet = reader.bytes();
            break;

          case 4:
            message.nonce = reader.uint64();
            break;

          case 5:
            message.contract_id = reader.bytes();
            break;

          case 6:
            message.expiration = reader.uint64();
            break;

          case 7:
            message.chain = reader.uint32();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    action: action_id;
    token: Uint8Array;
    wallet: Uint8Array;
    nonce: u64;
    contract_id: Uint8Array;
    expiration: u64;
    chain: u32;

    constructor(
      action: action_id = 0,
      token: Uint8Array = new Uint8Array(0),
      wallet: Uint8Array = new Uint8Array(0),
      nonce: u64 = 0,
      contract_id: Uint8Array = new Uint8Array(0),
      expiration: u64 = 0,
      chain: u32 = 0
    ) {
      this.action = action;
      this.token = token;
      this.wallet = wallet;
      this.nonce = nonce;
      this.contract_id = contract_id;
      this.expiration = expiration;
      this.chain = chain;
    }
  }

  export enum action_id {
    reserved_action = 0,
    add_validator = 1,
    remove_validator = 2,
    add_supported_token = 3,
    remove_supported_token = 4,
    add_supported_wrapped_token = 5,
    remove_supported_wrapped_token = 6,
    set_pause = 7,
    complete_transfer = 8,
    set_fee_token = 9,
    set_fee_wrapped_token = 10,
    claim_fee_token = 11,
    claim_fee_wrapped_token = 12,
  }
}
