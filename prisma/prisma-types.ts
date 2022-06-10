import { Prisma, PrismaToken, PrismaTokenTypeOption } from '@prisma/client';

const poolWithTokens = Prisma.validator<Prisma.PrismaPoolArgs>()({
    include: { tokens: true },
});

export type PrismaPoolWithTokens = Prisma.PrismaPoolGetPayload<typeof poolWithTokens>;

const poolTokenWithDynamicData = Prisma.validator<Prisma.PrismaPoolTokenArgs>()({
    include: { dynamicData: true, token: true },
});

export type PrismaPoolTokenWithDynamicData = Prisma.PrismaPoolTokenGetPayload<typeof poolTokenWithDynamicData>;

export const prismaPoolWithExpandedNesting = Prisma.validator<Prisma.PrismaPoolArgs>()({
    include: {
        linearData: true,
        elementData: true,
        dynamicData: true,
        stableDynamicData: true,
        linearDynamicData: true,
        staking: {
            include: {
                farm: {
                    include: {
                        rewarders: true,
                    },
                },
            },
        },
        categories: true,
        allTokens: {
            include: {
                token: true,
            },
        },
        aprItems: true,
        tokens: {
            include: {
                dynamicData: true,
                token: true,
                nestedPool: {
                    include: {
                        linearData: true,
                        dynamicData: true,
                        stableDynamicData: true,
                        linearDynamicData: true,
                        tokens: {
                            include: {
                                token: true,
                                dynamicData: true,
                                nestedPool: {
                                    include: {
                                        linearData: true,
                                        dynamicData: true,
                                        linearDynamicData: true,
                                        tokens: {
                                            include: {
                                                token: true,
                                                dynamicData: true,
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
});

export type PrismaPoolWithExpandedNesting = Prisma.PrismaPoolGetPayload<typeof prismaPoolWithExpandedNesting>;

const nestedPoolWithSingleLayerNesting = Prisma.validator<Prisma.PrismaPoolArgs>()({
    include: {
        linearData: true,
        dynamicData: true,
        stableDynamicData: true,
        linearDynamicData: true,
        tokens: {
            include: {
                token: true,
                dynamicData: true,
                nestedPool: {
                    include: {
                        linearData: true,
                        dynamicData: true,
                        linearDynamicData: true,
                        tokens: {
                            include: {
                                token: true,
                                dynamicData: true,
                            },
                        },
                    },
                },
            },
        },
    },
});

export type PrismaNestedPoolWithSingleLayerNesting = Prisma.PrismaPoolGetPayload<
    typeof nestedPoolWithSingleLayerNesting
>;

const nestedPoolWithNoNesting = Prisma.validator<Prisma.PrismaPoolArgs>()({
    include: {
        linearData: true,
        dynamicData: true,
        linearDynamicData: true,
        tokens: {
            include: {
                token: true,
                dynamicData: true,
            },
        },
    },
});

export type PrismaNestedPoolWithNoNesting = Prisma.PrismaPoolGetPayload<typeof nestedPoolWithNoNesting>;

const prismaPoolTokenWithExpandedNesting = Prisma.validator<Prisma.PrismaPoolTokenArgs>()({
    include: {
        token: true,
        dynamicData: true,
        nestedPool: {
            include: {
                linearData: true,
                dynamicData: true,
                stableDynamicData: true,
                linearDynamicData: true,
                tokens: {
                    include: {
                        token: true,
                        dynamicData: true,
                        nestedPool: {
                            include: {
                                linearData: true,
                                dynamicData: true,
                                linearDynamicData: true,
                                tokens: {
                                    include: {
                                        token: true,
                                        dynamicData: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
});

export type PrismaPoolTokenWithExpandedNesting = Prisma.PrismaPoolTokenGetPayload<
    typeof prismaPoolTokenWithExpandedNesting
>;

export type PrismaTokenWithTypes = PrismaToken & { types: PrismaTokenTypeOption[] };

export const prismaPoolMinimal = Prisma.validator<Prisma.PrismaPoolArgs>()({
    include: {
        dynamicData: true,
        categories: true,
        allTokens: {
            include: {
                token: true,
            },
        },
        aprItems: true,
        tokens: {
            include: {
                token: true,
            },
        },
        staking: true,
    },
});

export type PrismaPoolMinimal = Prisma.PrismaPoolGetPayload<typeof prismaPoolMinimal>;

export const prismaPoolBatchSwapWithSwaps = Prisma.validator<Prisma.PrismaPoolBatchSwapArgs>()({
    include: {
        swaps: {
            include: {
                pool: {
                    include: {
                        tokens: true,
                    },
                },
            },
        },
    },
});

export type PrismaPoolBatchSwapWithSwaps = Prisma.PrismaPoolBatchSwapGetPayload<typeof prismaPoolBatchSwapWithSwaps>;