import { GraphQLClient } from 'graphql-request';
import {
    OrderDirection,
    Pool_OrderBy,
    PoolsQueryVariables,
    CowAmmPoolFragment,
    getSdk,
    CowAmmSnapshotFragment,
    PoolSnapshot_OrderBy,
} from './generated/types';

/**
 * Builds a client based on subgraph URL.
 *
 * @param subgraphUrl - url of the subgraph
 * @returns sdk - generated sdk for the subgraph
 */
export const getCowAmmSubgraphClient = (subgraphUrl: string) => {
    const client = new GraphQLClient(subgraphUrl);
    const sdk = getSdk(client);

    return {
        ...sdk,
        async getAllPools(where: PoolsQueryVariables['where']): Promise<CowAmmPoolFragment[]> {
            const limit = 1000;
            let hasMore = true;
            let id = `0x`;
            let pools: CowAmmPoolFragment[] = [];

            while (hasMore) {
                const response = await sdk.Pools({
                    where: { ...where, id_gt: id },
                    orderBy: Pool_OrderBy.Id,
                    orderDirection: OrderDirection.Asc,
                    first: limit,
                });

                pools = [...pools, ...response.pools];

                if (response.pools.length < limit) {
                    hasMore = false;
                } else {
                    id = response.pools[response.pools.length - 1].id;
                }
            }

            return pools;
        },
        async getSnapshotsForTimestamp(timestamp: number): Promise<CowAmmSnapshotFragment[]> {
            const limit = 1000;
            let hasMore = true;
            let id = `0x`;
            let snapshots: CowAmmSnapshotFragment[] = [];

            while (hasMore) {
                const response = await sdk.Snapshots({
                    where: { timestamp, id_gt: id },
                    orderBy: PoolSnapshot_OrderBy.Id,
                    orderDirection: OrderDirection.Asc,
                    first: limit,
                });

                snapshots = [...snapshots, ...response.poolSnapshots];

                if (response.poolSnapshots.length < limit) {
                    hasMore = false;
                } else {
                    id = snapshots[snapshots.length - 1].id;
                }
            }

            return snapshots;
        },
    };
};

export type CowAmmSubgraphClient = ReturnType<typeof getCowAmmSubgraphClient>;