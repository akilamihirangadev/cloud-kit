import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm';
import { Person as NoSqlPerson } from '../nosql/person.schema';

@Entity({ name: 'persons' })
export class Person {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'char', length: 36, nullable: true })
  unique_person_id: string;

  @Column({ type: 'int', unsigned: true, nullable: true })
  title_id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  first_name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  middle_name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  last_name: string;

  @Column({ type: 'varchar', length: 191, nullable: true })
  reference: string;

  @Column({ type: 'timestamp', nullable: true })
  created_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date;

  @Column({ type: 'int', unsigned: true })
  person_status_id: number;

  @Column({ type: 'tinyint', default: true })
  is_active: boolean;

  @Column({ type: 'char', length: 36, nullable: true })
  created_by: string;

  @Column({ type: 'char', length: 36, nullable: true })
  updated_by: string;

  @Column({ type: 'int', unsigned: true, nullable: true })
  gender_id: number;

  @Column({ type: 'tinyint', default: true })
  opt_for_communication: boolean;

  @Column({ type: 'date', nullable: true })
  date_of_birth: Date;

  @Column({ type: 'date', nullable: true })
  date_of_death: Date;

  @Column({ type: 'text', nullable: true })
  additional_details: string;

  @Column({ type: 'tinyint', default: false })
  veteran: boolean;

  @Column({ type: 'varchar', length: 191, nullable: true })
  veteran_service: string;

  @Column({ type: 'varchar', length: 191, nullable: true })
  cause_of_death: string;

  @Column({ type: 'varchar', length: 191, nullable: true })
  maiden_name: string;

  @Column({ type: 'varchar', length: 191, nullable: true })
  place_of_birth: string;

  @Column({ type: 'varchar', length: 191, nullable: true })
  occupation: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  place_of_death: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  reference_id: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  external_id: string;

  payloadReference:NoSqlPerson;

}