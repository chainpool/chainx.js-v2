// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Enum } from '@chainx-v2/types/codec';

/** @name StorageKind */
export interface StorageKind extends Enum {
  readonly isUnused: boolean;
  readonly isPersistent: boolean;
  readonly isLocal: boolean;
}

export type PHANTOM_OFFCHAIN = 'offchain';
