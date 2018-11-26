import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany
} from 'typeorm';
import { Appointment } from './appointment';

@Entity('doctor')
export class Doctor {

    @PrimaryGeneratedColumn('uuid')
    id: String;

    @Column('text')
    first_name: String;

    @Column('text')
    last_name: String;

    @Column('text')
    specialization: String;

    @Column('text')
    location: String;

    @CreateDateColumn() // OLDER DATABASE MIGRATION TO BE IMPLEMENTED
    joined_on: Date;

    @UpdateDateColumn()
    last_updated: Date;

    
    // @OneToMany(
    //     type => Appointment,
    //     appointment => appointment.patient
    // )

    // appointments: Appointment[];

    @OneToMany(
        type => Appointment,
        appointment => appointment.doctor
    )
    appointments: Appointment[];
}