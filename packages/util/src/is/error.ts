// Copyright 2017-2020 @chainx-v2/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import isInstanceOf from './instanceOf';

/**
 * @name isError
 * @summary Tests for a `Error` object instance.
 * @description
 * Checks to see if the input object is an instance of `Error`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isError } from '@chainx-v2/util';
 *
 * console.log('isError', isError(new Error('message'))); // => true
 * ```
 */
export default function isError (value: unknown): value is Error {
  return isInstanceOf(value, Error);
}
