// Copyright 2017-2020 @chainx-v2/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, AccountIndex, Address } from '@chainx-v2/types/interfaces';
import { AccountIdAndIndex } from '../types';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterfaceRx } from '@chainx-v2/api/types';
import { isU8a } from '@chainx-v2/util';
import { decodeAddress } from '@chainx-v2/crypto';

import { memo } from '../util';

function retrieve (api: ApiInterfaceRx, address: Address | AccountId | AccountIndex | string | null | undefined): Observable<AccountIdAndIndex> {
  try {
    // yes, this can fail, don't care too much, catch will catch it
    const decoded = isU8a(address)
      ? address
      : decodeAddress((address || '').toString());

    if (decoded.length === 32) {
      const accountId = api.registry.createType('AccountId', decoded);

      return api.derive.accounts.idToIndex(accountId).pipe(
        map((accountIndex): AccountIdAndIndex => [accountId, accountIndex])
      );
    }

    const accountIndex = api.registry.createType('AccountIndex', decoded);

    return api.derive.accounts.indexToId(accountIndex).pipe(
      map((accountId): AccountIdAndIndex => [accountId, accountIndex])
    );
  } catch (error) {
    return of([undefined, undefined]);
  }
}

/**
 * @name idAndIndex
 * @param {(Address | AccountId | AccountIndex | string | null)} address - An accounts address in various formats.
 * @description  An array containing the [[AccountId]] and [[AccountIndex]] as optional values.
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.accounts.idAndIndex('F7Hs', ([id, ix]) => {
 *   console.log(`AccountId #${id} with corresponding AccountIndex ${ix}`);
 * });
 * ```
 */
export function idAndIndex (api: ApiInterfaceRx): (address?: Address | AccountId | AccountIndex | string | null) => Observable<AccountIdAndIndex> {
  return memo((address?: Address | AccountId | AccountIndex | string | null): Observable<AccountIdAndIndex> =>
    retrieve(api, address));
}
