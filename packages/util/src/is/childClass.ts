// Copyright 2017-2020 @chainx-v2/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Constructor } from '../types';

/**
 * @name isChildClass
 * @summary Tests if the child extends the parent Class
 * @description
 * Checks to see if the child Class extends the parent Class
 * @example
 * <BR>
 *
 * ```javascript
 * import { isChildClass } from '@chainx-v2/util';
 *
 * console.log('isChildClass', isChildClass(BN, BN); // => true
 * console.log('isChildClass', isChildClass(BN, Uint8Array); // => false
 * ```
 */
export default function isChildClass<P extends Constructor> (Parent: P, Child?: Constructor | null | unknown): Child is P {
  // https://stackoverflow.com/questions/30993434/check-if-a-constructor-inherits-another-in-es6/30993664
  return Child
    // eslint-disable-next-line no-prototype-builtins
    ? Parent === Child || Parent.isPrototypeOf(Child as Constructor)
    : false;
}
