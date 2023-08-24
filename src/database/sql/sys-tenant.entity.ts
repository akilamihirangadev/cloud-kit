import {
    Entity,
    Column,
    PrimaryColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
} from 'typeorm';

@Entity('SYS_tenants')
export class Tenant {
    @PrimaryColumn({ length: 36 })
    tena_id: string;

    @Column({ length: 255 })
    tena_name: string;

    @Column({ type: 'int', unsigned: true })
    tena_type: number;

    @Column({ length: 255 })
    tena_api_key: string;

    @Column({ length: 36, nullable: true })
    tena_created_by: string;

    @Column({ length: 36, nullable: true })
    tena_updated_by: string;

    @CreateDateColumn({ type: 'datetime' })
    tena_created_at: Date;

    @UpdateDateColumn({ type: 'datetime' })
    tena_updated_at: Date;

    @DeleteDateColumn({ type: 'timestamp', nullable: true })
    deleted_at: Date;

    @Column({ type: 'int', unsigned: true, nullable: true })
    registration_id: number;

    @Column({ type: 'tinyint', default: 0 })
    show_resource_calendar_for_all_sites: number;

    @Column({ type: 'tinyint', default: 1 })
    is_picking_up_attendies: number;

    @Column({ type: 'enum', enum: ['GROUP', 'SITE'], nullable: true })
    invoice_customer_by: string;

    @Column({ type: 'enum', enum: ['ALL', 'SELECTED'], default: 'ALL' })
    allow_proxy_vote: string;

    @Column({ type: 'tinyint', default: 0 })
    is_admin: number;

    @Column({ type: 'tinyint', default: 0 })
    act_as_agent: number;

    @Column({ length: 255, nullable: true })
    avl_tax_code: string;

    @Column({ name: 'reference_id', length: 255 })
    reference_id: string;
}