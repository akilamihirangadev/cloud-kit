import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm';

@Entity('previous_inter_details')
export class PreviousIntermentDetails {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 191, nullable: true })
    first_name: string;

    @Column({ length: 191, nullable: true })
    middle_name: string;

    @Column({ length: 191, nullable: true })
    last_name: string;

    @Column({ nullable: true })
    opus_xi_person_id: number;

    @Column({ length: 191, nullable: true })
    person_reference: string;

    @Column({ nullable: true })
    opus_xi_location_id: number;

    @Column({ nullable: true })
    interment_depth: number;

    @Column({ length: 36, nullable: true })
    created_by: string;

    @Column({ length: 36, nullable: true })
    updated_by: string;

    @Column({ nullable: true, type: 'timestamp' })
    created_at: Date;

    @Column({ nullable: true, type: 'timestamp' })
    updated_at: Date;

    @DeleteDateColumn({ nullable: true, type: 'timestamp' })
    deleted_at: Date;
}
