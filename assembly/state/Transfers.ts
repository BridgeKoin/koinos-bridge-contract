import { chain, System } from '@koinos/sdk-as';
import { Spaces } from "./Spaces"

export class Transfers {
  private space: chain.object_space;

  constructor(contractId: Uint8Array) {
    this.space = new chain.object_space(false, contractId, Spaces.TRANSFERS_SPACE_ID);
  }

  has(key: Uint8Array): boolean {
    const object = this.get(key);

    return object ? true : false;
  }

  get(key: Uint8Array): Uint8Array | null {
    return System.getBytes(this.space, key);
  }

  put(key: Uint8Array): void {
    System.putBytes(this.space, key, new Uint8Array(0));
  }
}
