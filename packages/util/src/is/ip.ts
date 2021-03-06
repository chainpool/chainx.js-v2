// Copyright 2017-2020 @chainx-v2/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import ipRegex from 'ip-regex';

type IpTypes = 'v4' | 'v6';

/**
 * @name isIp
 * @summary Tests if the value is a valid IP address
 * @description
 * Checks to see if the value is a valid IP address. Optionally check for either v4/v6
 * @example
 * <BR>
 *
 * ```javascript
 * import { isIp } from '@chainx-v2/util';
 *
 * isIp('192.168.0.1')); // => true
 * isIp('1:2:3:4:5:6:7:8'); // => true
 * isIp('192.168.0.1', 'v6')); // => false
 * isIp('1:2:3:4:5:6:7:8', 'v4'); // => false
 * ```
 */
export default function isIp (value: string, type?: IpTypes): boolean {
  if (type === 'v4') {
    return ipRegex.v4({ exact: true }).test(value);
  } else if (type === 'v6') {
    return ipRegex.v6({ exact: true }).test(value);
  }

  return ipRegex({ exact: true }).test(value);
}
