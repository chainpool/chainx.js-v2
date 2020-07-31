
// eslint-disable-next-line header/header
import ChainX from './index';
import ApiPromise from '@chainx-v2/api/promise';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Asset {
  private _api: Promise<ApiPromise>;
  constructor (chainx: ChainX) {
    this._api = chainx.api;
  }

  systemPeers () {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    return this._api.rpc.system.peers();
  }

  systemHealth () {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-assignment
    const health = this._api.rpc.system.health();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return health;
  }

  getAssetsByAccount (...args: any[]) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    return this._api.rpc.xassets.getAssetsByAccount(...args);
  }

  getAssets (...args: any[]) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    return this._api.rpc.xassets.getAssets(...args);
  }
}

export default Asset;
