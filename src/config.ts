import * as dotenv from 'dotenv';

dotenv.config({ path: '.env'});

export interface IConfig {
    port: number;
    databaseUrl: string;
}

const config: IConfig = {
    port: +process.env.PORT,
    databaseUrl: process.env.DATABASE_URL
};

export { config };