// Copyright 2017-2020 @chainx-v2/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';

import { bnMin } from '.';

describe('bnMin', (): void => {
  it('finds BN minimum', (): void => {
    expect(
      bnMin(new BN(1), new BN(2), new BN(3))
    ).toEqual(new BN(1));
  });
});
