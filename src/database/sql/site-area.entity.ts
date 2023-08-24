import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity('site_areas')
export class SiteArea {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 191, nullable: true})
  opus_xi_area_id: string;

  @Column({ type: 'int', nullable: true })
  site_id_old: number;

  @Column({ type: 'int', nullable: true })
  terr_id: number;

  @Column({ type: 'varchar', length: 191, nullable: false,default: '-' })
  area_name: string;

  @Column({ type: 'varchar', length: 191, nullable: true})
  code: string;

  @Column({ type: 'int', nullable: true })
  site_area_level_id: number;

  @Column({ type: 'int', nullable: true })
  parent_area_id: number;

  @Column({ type: 'varchar', length: 191, nullable: true})
  opus_xi_area_status: string;

  @Column({ type: 'char', length: 36, nullable: true})
  created_by: string;

  @Column({ type: 'char', length: 36, nullable: true})
  updated_by: string;

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date;

  @Column({ name: 'reference_id', length: 255 })
  reference: string;
}