import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm';

@Entity({ name: 'location_types' })
export class LocationType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'opus_xi_location_type_id', type: 'bigint', nullable: true })
  opusXiLocationTypeId: number;

  @Column({ name: 'tenant_id', length: 36, nullable: true })
  tenantId: string;

  @Column({ name: 'type_name', length: 191, nullable: true })
  typeName: string;

  @Column({ name: 'type_code', length: 191, nullable: true })
  typeCode: string;

  @Column({ name: 'created_by', length: 36, nullable: true })
  createdBy: string;

  @Column({ name: 'updated_by', length: 36, nullable: true })
  updatedBy: string;

  @Column({ name: 'created_at', nullable: true })
  createdAt: Date;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt: Date;

  @Column({ name: 'option_value', length: 191, nullable: true })
  optionValue: string;

  @Column({ name: 'sort_order', nullable: true })
  sortOrder: number;

  @Column({ name: 'is_active', default: 1 })
  isActive: number;

  @Column({ name: 'is_editable', default: 1 })
  isEditable: number;

  @Column({ name: 'is_default_option', default: 0 })
  isDefaultOption: number;

  @Column({ name: 'reference_id' })
  reference: string;
}