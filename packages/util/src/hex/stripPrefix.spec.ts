// Copyright 2017-2020 @chainx-v2/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { hexStripPrefix } from '.';

describe('hexStripPrefix', (): void => {
  it('returns an empty string when null value supplied', (): void => {
    expect(
      hexStripPrefix(null)
    ).toEqual('');
  });

  it('strips the prefix from hex strings', (): void => {
    expect(
      hexStripPrefix('0x1223')
    ).toEqual('1223');
  });

  it('returns un-prefixed hex as-is', (): void => {
    expect(
      hexStripPrefix('abcd1223')
    ).toEqual('abcd1223');
  });

  it('throws when invalid hex', (): void => {
    expect(
      (): string => hexStripPrefix('0x0x01ab')
    ).toThrow(/Invalid hex/);
  });
});
