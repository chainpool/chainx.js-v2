// Copyright 2017-2020 @chainx-v2/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@chainx-v2/api/types';
import { ReferendumInfo, ReferendumInfoFinished } from '@chainx-v2/types/interfaces';

import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Option } from '@chainx-v2/types';

import { memo } from '../util';

export function referendumsFinished (api: ApiInterfaceRx): () => Observable<ReferendumInfoFinished[]> {
  return memo((): Observable<ReferendumInfoFinished[]> =>
    api.derive.democracy.referendumIds().pipe(
      switchMap((ids) => api.query.democracy.referendumInfoOf.multi<Option<ReferendumInfo>>(ids)),
      map((infos): ReferendumInfoFinished[] =>
        infos
          .filter((optInfo) => optInfo.isSome)
          .map((optInfo) => optInfo.unwrap())
          .filter((info) => info.isFinished)
          .map((info) => info.asFinished)
      )
    )
  );
}
