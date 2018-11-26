import * as Router from 'koa-router';
import * as koabody from 'koa-bodyparser';
import { schema } from 'graphql/schema';
export const routes = new Router();

// THESE FUNCTIONS ARE WEIRD. GO INTO SOURCE CODES YOURSELF AND OBTAIN THE PRECISE LOCATION
import { graphqlKoa } from 'apollo-server-koa/src/koaApollo';
// import { graphiqlKoa } from 'apollo-server-koa/src/koaApollo'; // probably got cut in the latest update lmao

// THESE NEEDS REFRACTOR
// THE graphiql tool for inbrowser graphql has been moved to https://github.com/prisma/graphql-playground

// ENTRY POINT

const apiEntryPath = '/graphql';
const graphQlOpts = graphqlKoa({
    schema,
});

routes.get(apiEntryPath, graphQlOpts);
routes.post(apiEntryPath, koabody(), graphQlOpts);