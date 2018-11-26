import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany
} from 'typeorm';
import { Appointment } from './appointment';

@Entity('patient')
export class Patient {

    @PrimaryGeneratedColumn('uuid')
    id: String;

    @Column('text')
    first_name: String;

    @Column('text')
    last_name: String;

    @Column('text')
    illness_description: String;

    @Column('text')
    current_status: String;

    @Column('boolean')
    more_visit: Boolean;

    @CreateDateColumn() // OLDER DATABASE MIGRATION TO BE IMPLEMENTED
    joined_on: Date;

    @UpdateDateColumn()
    last_updated: Date;

    @OneToMany(
        type => Appointment,
        appointment => appointment.patient
    )

    appointments: Appointment[];
}