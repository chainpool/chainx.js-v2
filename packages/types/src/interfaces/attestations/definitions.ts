// Copyright 2017-2020 @chainx-v2/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// order important in structs... :)
/* eslint-disable sort-keys */

import { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    BlockAttestations: {
      receipt: 'CandidateReceipt',
      valid: 'Vec<AccountId>',
      invalid: 'Vec<AccountId>'
    },
    IncludedBlocks: {
      actualNumber: 'BlockNumber',
      session: 'SessionIndex',
      randomSeed: 'H256',
      activeParachains: 'Vec<ParaId>',
      paraBlocks: 'Vec<Hash>'
    },
    MoreAttestations: {}
  }
} as Definitions;
