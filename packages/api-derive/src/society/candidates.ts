// Copyright 2017-2020 @chainx-v2/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@chainx-v2/api/types';
import { AccountId, BalanceOf, Bid, BidKind } from '@chainx-v2/types/interfaces';
import { ITuple } from '@chainx-v2/types/types';
import { DeriveSocietyCandidate } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Option, Vec } from '@chainx-v2/types';

import { memo } from '../util';

type ResultSuspend = Option<ITuple<[BalanceOf, BidKind]>>;
type Result = [Bid[], ResultSuspend[]]

/**
 * @description Get the candidate info for a society
 */
export function candidates (api: ApiInterfaceRx): () => Observable<DeriveSocietyCandidate[]> {
  return memo((): Observable<DeriveSocietyCandidate[]> =>
    api.query.society.candidates<Vec<Bid>>().pipe(
      switchMap((candidates: Vec<Bid>): Observable<Result> =>
        combineLatest([
          of(candidates),
          api.query.society.suspendedCandidates.multi<ResultSuspend>(
            candidates.map(({ who }): AccountId => who))
        ])
      ),
      map(([candidates, suspended]: Result): DeriveSocietyCandidate[] =>
        candidates.map(({ kind, value, who }, index) => ({
          accountId: who,
          isSuspended: suspended[index].isSome,
          kind,
          value
        }))
      )
    )
  );
}
