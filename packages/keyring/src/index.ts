// Copyright 2017-2020 @chainx-v2/keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// import { detectPackage } from '@chainx-v2/util';
import { decodeAddress, encodeAddress, setSS58Format } from '@chainx-v2/crypto';

import Keyring from './keyring';

// eslint-disable-next-line @typescript-eslint/no-var-requires
// detectPackage(require('./package.json'), typeof __dirname !== 'undefined' && __dirname);

export default Keyring;

export {
  Keyring,
  decodeAddress,
  encodeAddress,
  setSS58Format
};
