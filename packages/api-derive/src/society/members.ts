// Copyright 2017-2020 @chainx-v2/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@chainx-v2/api/types';
import { AccountId } from '@chainx-v2/types/interfaces';
import { DeriveSocietyMember } from '../types';

import { Observable, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { memo } from '../util';

/**
 * @description Get the member info for a society
 */
export function members (api: ApiInterfaceRx): () => Observable<DeriveSocietyMember[]> {
  return memo((): Observable<DeriveSocietyMember[]> =>
    api.query.society.members<AccountId[]>().pipe(
      switchMap((members): Observable<DeriveSocietyMember[]> =>
        combineLatest(
          members.map((accountId): Observable<DeriveSocietyMember> =>
            api.derive.society.member(accountId)
          )
        )
      )
    )
  );
}
