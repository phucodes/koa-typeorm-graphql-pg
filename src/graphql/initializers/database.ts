import * as path from 'path';
import { createConnection } from 'typeorm';
import { Doctor } from '../entities/doctor';
import { Patient } from '../entities/patient';
import { Appointment } from '../entities/appointment';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env'});

const port: number = +process.env.port;

export const dbInitializers = async() => {
    return await createConnection({
        type: 'postgres',
        host: process.env.host,
        port: port,
        database: process.env.database,
        username: process.env.username,
        password: process.env.password,
        entities: [Doctor, Patient, Appointment],
        logging: ['query', 'error'],
        synchronize: true
    }).then(async (connection) => {
        debugger
        console.log('Database Connection Successful');
        return await connection.manager
            .save(item)
            .then(item => {
                console.log('save')
            });
    });
}