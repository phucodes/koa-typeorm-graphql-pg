import * as Koa from 'koa';
//import * as HttpStatus from 'http-status-code';

import { dbInitializers } from 'graphql/initializers/database';
import { router } from 'koa-router';

const port = 3000;

// PERFORM FIRST TIME SEEDING. TODO: PREVENT TWICE RUNNING EVERYTIME APP STARTUPS
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

//bootstrap(); 
// THE ABOVE FUNCTION IS ONLY FOR FIRST TIME SEEDING OF SAMPLE DATA IN THE CASE THIS REPO IS CLONED INTO A DIFFERENT MACHINE.

const app = new Koa();
app.listen(port, () => {
    console.log(`server is listening on ` + port);
});