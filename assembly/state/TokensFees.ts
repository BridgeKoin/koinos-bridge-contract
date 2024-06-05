import { Storage } from '@koinos/sdk-as';
import { bridge } from '../proto/bridge';
import { Spaces } from "./Spaces"

export class TokensFees extends Storage.Map<Uint8Array, bridge.fees_object> {
  constructor(contractId: Uint8Array) {
    super(
      contractId, 
      Spaces.TOKENS_FEES_SPACE_ID, 
      bridge.fees_object.decode, 
      bridge.fees_object.encode,
      () => new bridge.fees_object(0, 0)
    );
  }
}
