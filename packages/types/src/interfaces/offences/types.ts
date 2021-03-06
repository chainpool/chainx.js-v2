// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { ITuple } from '@chainx-v2/types/types';
import { Struct, U8aFixed, Vec } from '@chainx-v2/types/codec';
import { Bytes } from '@chainx-v2/types/primitive';
import { AccountId, Hash, Perbill } from '@chainx-v2/types/interfaces/runtime';
import { IdentificationTuple, SessionIndex } from '@chainx-v2/types/interfaces/session';

/** @name DeferredOffenceOf */
export interface DeferredOffenceOf extends ITuple<[Vec<OffenceDetails>, Vec<Perbill>, SessionIndex]> {}

/** @name Kind */
export interface Kind extends U8aFixed {}

/** @name OffenceDetails */
export interface OffenceDetails extends Struct {
  readonly offender: Offender;
  readonly reporters: Vec<Reporter>;
}

/** @name Offender */
export interface Offender extends IdentificationTuple {}

/** @name OpaqueTimeSlot */
export interface OpaqueTimeSlot extends Bytes {}

/** @name Reporter */
export interface Reporter extends AccountId {}

/** @name ReportIdOf */
export interface ReportIdOf extends Hash {}

export type PHANTOM_OFFENCES = 'offences';
