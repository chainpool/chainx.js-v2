// Copyright 2017-2020 @chainx-v2/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Hash } from '@chainx-v2/types/interfaces';
import { ContractABIPre } from '../types';

import { ApiRx } from '@chainx-v2/api';
import { decorateMethod } from '@chainx-v2/api/rx';

import Abi from '../Abi';
import Blueprint from '../base/Blueprint';

export default class RxBlueprint extends Blueprint<'rxjs'> {
  constructor (api: ApiRx, abi: ContractABIPre | Abi, codeHash: string | Hash) {
    super(api, abi, decorateMethod, codeHash);
  }
}
