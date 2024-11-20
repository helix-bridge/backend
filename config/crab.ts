import { env } from '../apps/env';
import { NetworkData } from '../modules/network/network-config-types';

export default <NetworkData>{
    chain: {
        slug: 'crab',
        id: 44,
        nativeAssetAddress: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
        wrappedNativeAssetAddress: '0x2d2b97ea380b0185e9fdf8271d1afb5d2bf18329',
        prismaId: 'CRAB',
        gqlId: 'CRAB',
    },
    subgraphs: {
        startDate: '2024-11-11',
        balancer: ['https://thegraph-g2.darwinia.network/training/subgraphs/name/helixbox/v2-balancer'],
        // balancerV3: `https://thegraph-g2.darwinia.network/training/subgraphs/name/helixbox/v3-pools`,
        // balancerPoolsV3: `https://thegraph-g2.darwinia.network/training/subgraphs/name/helixbox/v3-pools`,
        beetsBar: '',
        blocks: 'https://thegraph-g2.darwinia.network/training/subgraphs/name/helixbox/darwinia-blocks',
        gauge: ``,
    },
    eth: {
        address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        addressFormatted: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
        symbol: 'CRAB',
        name: 'Crab Native Token',
    },
    weth: {
        address: '0x2d2b97ea380b0185e9fdf8271d1afb5d2bf18329',
        addressFormatted: '0x2D2b97EA380b0185e9fDF8271d1AFB5d2Bf18329',
    },
    coingecko: {
        nativeAssetId: 'crab',
        platformId: 'crab',
        excludedTokenAddresses: [],
    },
    rpcUrl: 'http://g1.crab2.darwinia.network:9944',
    rpcMaxBlockRange: 5000,
    protocolToken: 'bal',
    bal: {
        address: '0xe5b11c9a8e8a22f31dc5a48dae71bc00d542c6ee',
    },
    veBal: {
        address: '',
        bptAddress: '',
        delegationProxy: '',
    },
    balancer: {
        v2: {
            vaultAddress: '0x3aa4F2daF93803B789a2233f1c9Cb374Ceb96a6B',
            defaultSwapFeePercentage: '0.5',
            defaultYieldFeePercentage: '0.5',
            balancerQueriesAddress: '0xd39690825638437539Bcda4fA867A7b5a879761e',
        },
        v3: {
            vaultAddress: '0x3aa4F2daF93803B789a2233f1c9Cb374Ceb96a6B',
            routerAddress: '0x3aa4F2daF93803B789a2233f1c9Cb374Ceb96a6B',
            defaultSwapFeePercentage: '0.5',
            defaultYieldFeePercentage: '0.5',
        },
    },
    ybAprConfig: {
        maker: {
            sdai: '',
        },
        defaultHandlers: {
        },
    },
    multicall: '0xca11bde05977b3631167028862be2a173976ca11',
    multicall3: '0xca11bde05977b3631167028862be2a173976ca11',
    avgBlockSpeed: 5,
    monitoring: {
        main: {
            alarmTopicArn: '',
        },
        canary: {
            alarmTopicArn: '',
        },
    },
    datastudio: {
        main: {
            user: '',
            sheetId: '',
            databaseTabName: '',
            compositionTabName: '',
            emissionDataTabName: '',
        },
        canary: {
            user: '',
            sheetId: '',
            databaseTabName: '',
            compositionTabName: '',
            emissionDataTabName: '',
        },
    },
};
