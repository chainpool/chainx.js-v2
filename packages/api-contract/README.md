# @chainx-v2/api-contract

Interfaces to allow for the encoding and decoding of Substrate contract ABIs.

```js
import {ApiPromise, WsProvider } from '@chainx-v2/api';
import { Abi } from '@chainx-v2/api-contract';

const wsProvider = new WsProvider(<...Node Url...>);
const api = await ApiPromise.create({ provider: wsProvider });
const abi = new Abi(api.registry, <...JSON ABI...>);

api.tx.contracts
  .call(<contract addr>, <value>, <max gas>, abi.messages.<method name>(<...params...>))
  .signAndSend(<keyring pair>, (result: SubmittableResult) => { ... });
```
