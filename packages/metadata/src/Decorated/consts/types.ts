
// Copyright 2017-2020 @chainx-v2/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec } from '@chainx-v2/types/types';
import { ModuleConstantMetadataLatest } from '@chainx-v2/types/interfaces';

export type AugmentedConst<T extends Codec> = T & ConstantCodec;

export type ModuleConstants = Record<string, Codec>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Constants { }

export interface ConstantCodec extends Codec {
  meta: ModuleConstantMetadataLatest;
}
