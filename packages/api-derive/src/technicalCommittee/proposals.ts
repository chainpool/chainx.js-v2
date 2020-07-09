// Copyright 2017-2020 @chainx-v2/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@chainx-v2/api/types';
import { DeriveCollectiveProposals } from '../types';

import { Observable } from 'rxjs';
import { proposals as collectiveProposals } from '../collective';
import { memo } from '../util';

export function proposals (api: ApiInterfaceRx): () => Observable<DeriveCollectiveProposals> {
  return memo(collectiveProposals(api, 'technicalCommittee'));
}
