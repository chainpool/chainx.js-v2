// Copyright 2017-2020 @chainx-v2/crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import wasmCrypto from '@polkadot/wasm-crypto';

export function cryptoIsReady (): boolean {
  return wasmCrypto.isReady();
}

export function cryptoWaitReady (): Promise<boolean> {
  return wasmCrypto
    .waitReady()
    .then((): boolean => true)
    .catch((error): boolean => {
      console.error('Unable to initialize @chainx-v2/crypto', error);

      return false;
    });
}

// start init process immediately
cryptoWaitReady().catch((): void => {
  // shouldn't happen, logged above
});
