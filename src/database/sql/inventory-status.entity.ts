import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity('inventory_statuses')
export class InventoryStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 191, nullable: true})
  option_value: string;

  @Column({ type: 'int', nullable: true })
  sort_order: number;

  @Column({ type: 'int', default: 1 })
  is_active: number;

  @Column({ type: 'int', default: 1 })
  is_editable: number;

  @Column({ type: 'int', default: 0 })
  is_default_option: number;

  @DeleteDateColumn({ type: 'datetime', nullable: true })
  deleted_at: Date;

  @Column({ type: 'char', length: 36, nullable: true })
  tenant_id: string;

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updated_at: Date;

  @Column({ name: 'reference_id', length: 255 })
  reference: string;
}