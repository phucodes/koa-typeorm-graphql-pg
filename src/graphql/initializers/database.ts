import { createConnection } from 'typeorm';
import { Doctor } from '../entities/doctor';
import { Patient } from '../entities/patient';
import { Appointment } from '../entities/appointment';
import * as dotenv from 'dotenv';
import * as PostgressConnectionStringParser from 'pg-connection-string';
import { config } from '../../config';

dotenv.config({ path: '.env'});

//const connectionOptions = PostgressConnectionStringParser.parse(config.databaseUrl)

let port: number = +process.env.port;

export const dbInitializers = async() => {
    return await createConnection({
        type: 'postgres',
        host: '127.0.0.1',
        port: 1942,
        username: 'postgres',
        password: '12345',
        database: 'koa-orm',
        entities: [Doctor, Patient, Appointment],
        logging: ['query', 'error'],
        synchronize: true
    }).then(async (connection) => {
        debugger
        console.log('Database Connection Successful');

        // SEED FIRST DOCTOR
        const doctor = new Doctor();
        doctor.first_name = "lorem";
        doctor.last_name = "ipsum";
        doctor.location = "hanoi";
        doctor.specialization = "being a doctor";

        // SEED FIRST PATIENT
        const patient = new Patient();
        patient.first_name = "benh";
        patient.last_name = "nhan";
        patient.illness_description = "malaria";
        patient.more_visit = false;
        patient.current_status = "intensive care unit";

        // SEED FIRST APPOINTMENT
        const appointment = new Appointment();
        appointment.location = "hanoi";
        appointment.doctor = doctor;
        appointment.patient = patient;
        appointment.status = false;

        //todo: SEED DATABASE ON FIRST STARTUP

        return await connection.manager
            .save([doctor, patient, appointment])
            .then(() => {
                console.log('save')
            });
    });
}