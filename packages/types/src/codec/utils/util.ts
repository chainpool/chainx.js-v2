// Copyright 2017-2020 @chainx-v2/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isFunction } from '@chainx-v2/util';

export function hasEq (o: unknown): o is { eq: (other: unknown) => boolean } {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return isFunction((o as any).eq);
}
