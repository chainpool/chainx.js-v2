// Copyright 2017-2020 @chainx-v2/types-known authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { OverrideVersionedType } from '@chainx-v2/types/types';

const versioned: OverrideVersionedType[] = [
  {
    minmax: [1, 2],
    types: {
      Address: 'AccountId',
      Keys: 'SessionKeys5',
      LookupSource: 'AccountId',
      Multiplier: 'Fixed64',
      Weight: 'u32'
    }
  },
  {
    minmax: [3, 19],
    types: {
      Address: 'AccountId',
      Keys: 'SessionKeys5',
      LookupSource: 'AccountId'
    }
  },
  {
    minmax: [20, undefined],
    types: {
      Address: 'AccountId',
      Keys: 'SessionKeys5',
      LookupSource: 'AccountId',
      ProxyType: {
        _enum: ['Any', 'NonTransfer', 'Staking', 'SudoBalances']
      }
    }
  }
];

export default versioned;
