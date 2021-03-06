// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, Address } from '@chainx-v2/types/interfaces';
import { IKeyringPair } from '@chainx-v2/types/types';

import { isFunction } from '@chainx-v2/util';

export default function isKeyringPair (account: string | IKeyringPair | AccountId | Address): account is IKeyringPair {
  return isFunction((account as IKeyringPair).sign);
}
