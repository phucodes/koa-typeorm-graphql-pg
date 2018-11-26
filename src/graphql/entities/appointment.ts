import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne
} from 'typeorm';

import { Doctor } from './doctor';
import { Patient } from './patient';

@Entity('appointment')
export class Appointment {

    @PrimaryGeneratedColumn('uuid')
    id: String;

    @Column('text')
    location: String;

    @Column('boolean', {
        default: 'false',
    })
    status: Boolean;

    @CreateDateColumn() // OLDER DATABASE MIGRATION TO BE IMPLEMENTED
    joined_on: String;

    @UpdateDateColumn()
    last_updated: Date;

    @ManyToOne(
        type => Doctor,
        doctor => doctor.appointments,
        {
            primary: true,
            nullable: false
        }
    )
    doctor: Doctor;

    @ManyToOne(
        type => Patient,
        patient => patient.appointments,
        {
            primary: true,
            nullable: false
        }
    )
    patient: Patient;
}