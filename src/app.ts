import * as Koa from 'koa';
//import * as HttpStatus from 'http-status-code';

import { dbInitializers } from 'graphql/initializers/database';
import { router } from 'koa-router';

const port = 3000;

const bootstrap = async() => {
    const seed = dbInitializers();;
    
    const app = new Koa();
    app.use(async ctx => {
        ctx.body = `App is running on port ` + port;
    })
    app.listen(port);
    // await seed.close();
}

//todo: close connection when app closes

bootstrap();