// Copyright 2017-2020 @chainx-v2/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ContractABIPre } from '../types';

import { ApiRx } from '@chainx-v2/api';
import { decorateMethod } from '@chainx-v2/api/rx';

import Abi from '../Abi';
import Code from '../base/Code';

export default class RxCode extends Code<'rxjs'> {
  constructor (api: ApiRx, abi: ContractABIPre | Abi, wasm: string | Uint8Array) {
    super(api, abi, decorateMethod, wasm);
  }
}
