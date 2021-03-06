// Copyright 2017-2020 @chainx-v2/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, Balance, BlockNumber, Hash } from '@chainx-v2/types/interfaces';
import { ITuple } from '@chainx-v2/types/types';
import { ApiInterfaceRx } from '@chainx-v2/api/types';
import { DeriveProposalImage } from '../types';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Bytes, Option } from '@chainx-v2/types';

import { memo } from '../util';
import { parseImage } from './util';

type PreImage = Option<ITuple<[Bytes, AccountId, Balance, BlockNumber]>>;

export function preimage (api: ApiInterfaceRx): (hash: Hash) => Observable<DeriveProposalImage | undefined> {
  return memo((hash: Hash): Observable<DeriveProposalImage | undefined> =>
    api.query.democracy.preimages<PreImage>(hash).pipe(
      map((imageOpt) => parseImage(api, imageOpt))
    )
  );
}
