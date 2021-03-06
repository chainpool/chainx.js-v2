// Copyright 2017-2020 @chainx-v2/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { EventRecord, Hash, SignedBlock } from '@chainx-v2/types/interfaces';

import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterfaceRx } from '@chainx-v2/api/types';

import { memo } from '../util';

interface Result {
  block: SignedBlock;
  events: EventRecord[];
}

export function events (api: ApiInterfaceRx): (at: Hash) => Observable<Result> {
  return memo((at: Hash): Observable<Result> =>
    combineLatest([
      api.query.system.events.at(at),
      api.rpc.chain.getBlock(at)
    ]).pipe(
      map(([events, block]) => ({
        block,
        events
      }))
    )
  );
}
