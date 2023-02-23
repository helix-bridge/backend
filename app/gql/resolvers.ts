import { loadFilesSync } from '@graphql-tools/load-files';
import path from 'path';
import { mergeResolvers } from '@graphql-tools/merge';

const balancerResolversArray = loadFilesSync(path.join(__dirname, '../../modules/!(beethoven)/**/*.resolvers.*'));

const beethovenResolversArray = loadFilesSync(path.join(__dirname, '../../modules/!(balancer)/**/*.resolvers.*'));

export const balancerResolvers = mergeResolvers(balancerResolversArray);
export const beethovenResolvers = mergeResolvers(beethovenResolversArray);
