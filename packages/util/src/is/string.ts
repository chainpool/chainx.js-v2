// Copyright 2017-2020 @chainx-v2/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/**
 * @name isString
 * @summary Tests for a string.
 * @description
 * Checks to see if the input value is a JavaScript string.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isString } from '@chainx-v2/util';
 *
 * console.log('isString', isString('test')); // => true
 * ```
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export default function isString (value: unknown): value is string | String {
  return typeof value === 'string' || value instanceof String;
}
