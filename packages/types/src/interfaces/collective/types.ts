// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Struct, Vec } from '@chainx-v2/types/codec';
import { u32 } from '@chainx-v2/types/primitive';
import { AccountId, BlockNumber } from '@chainx-v2/types/interfaces/runtime';

/** @name MemberCount */
export interface MemberCount extends u32 {}

/** @name ProposalIndex */
export interface ProposalIndex extends u32 {}

/** @name Votes */
export interface Votes extends Struct {
  readonly index: ProposalIndex;
  readonly threshold: MemberCount;
  readonly ayes: Vec<AccountId>;
  readonly nays: Vec<AccountId>;
  readonly end: BlockNumber;
}

/** @name VotesTo230 */
export interface VotesTo230 extends Struct {
  readonly index: ProposalIndex;
  readonly threshold: MemberCount;
  readonly ayes: Vec<AccountId>;
  readonly nays: Vec<AccountId>;
}

export type PHANTOM_COLLECTIVE = 'collective';
