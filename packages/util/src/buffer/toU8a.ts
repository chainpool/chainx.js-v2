// Copyright 2017-2020 @chainx-v2/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/**
 * @name bufferToU8a
 * @summary Creates a Uint8Array value from a Buffer object.
 * @description
 * `null` inputs returns an empty result, `Buffer` values return the actual value as a `Uint8Array`. Anything that is not a `Buffer` object throws an error.
 * @example
 * <BR>
 *
 * ```javascript
 * import { bufferToU8a } from '@chainx-v2/util';
 *
 * bufferToU8a(Buffer.from([1, 2, 3]));
 * ```
 */
export default function bufferToU8a (buffer?: Buffer | number[] | null): Uint8Array {
  return new Uint8Array(buffer || []);
}
