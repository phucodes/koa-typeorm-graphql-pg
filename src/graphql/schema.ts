import { makeExecutableSchema } from 'graphql-tools';
import { GraphQlSchema } from 'graphql';

import { Query } from './query/query';
import { resolvers } from './resolver';
import { types } from './types';

const schemaDefinition = `
    schema: {
        query: Query
    }
`;

const typeDefs = [
    schemaDefinition,
    Query,
    ... types,
];

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});