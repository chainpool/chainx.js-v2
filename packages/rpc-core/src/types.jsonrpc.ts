// Copyright 2017-2020 @chainx-v2/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// FIXME, this whole file needs to move to API

import { AnyFunction } from '@chainx-v2/types/types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RpcInterface { }

export type AugmentedRpc<F extends AnyFunction> = F;
