import { Goerli } from '@usedapp/core';

export const ROUTER_ADDRESS = '0x66e0f7864b2D279117e17686e1e0cf45ecF9D2Ea';

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: 'https://eth-goerli.g.alchemy.com/v2/H9P2sMtIlNYXmxZOfJmYXnCVZ0cwX_ZL',
  },
};
