// Copyright 2017-2020 @chainx-v2/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// order important in structs... :)
/* eslint-disable sort-keys */

import { Definitions } from '../../types';

export default {
  rpc: {
    queryInfo: {
      description: 'Retrieves the fee information for an encoded extrinsic',
      params: [
        {
          name: 'extrinsic',
          type: 'Bytes'
        },
        {
          name: 'at',
          type: 'BlockHash',
          isOptional: true
        }
      ],
      type: 'RuntimeDispatchInfo'
    }
  },
  types: {
    RuntimeDispatchInfo: {
      weight: 'Weight',
      class: 'DispatchClass',
      partialFee: 'Balance'
    }
  }
} as Definitions;
