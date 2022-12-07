import { useState, useEffect } from 'react';
import Web3 from 'web3';
import { useConfig } from '@usedapp/core';

import { ROUTER_ADDRESS } from '../config';
import { getRouterInfo } from '../utils/getRouterInfo';
import { getFactoryInfo } from '../utils/getFactoryInfo';

export const loadPools = async (providerUrl) => {
  const provider = new Web3.providers.HttpProvider(providerUrl);
  const web3 = new Web3(provider);

  const routerInfo = await getRouterInfo(ROUTER_ADDRESS, web3);
  const factoryInfo = await getFactoryInfo(routerInfo.factory, web3);

  console.log({ factoryInfo });

  return factoryInfo.pairsInfo;
};

export const usePools = () => {
  const { readOnlyChainId, readOnlyUrls } = useConfig();
  const [loading, setLoading] = useState(true);
  const [pools, setPools] = useState({});

  useEffect(() => {
    loadPools(readOnlyUrls[readOnlyChainId]).then((pools) => {
      setPools(pools);
      setLoading(false);
    });
  }, [readOnlyUrls, readOnlyChainId]);

  return [loading, pools];
};