import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm';


@Entity({ name: 'person_org_access_tb' })
export class PersonOrgAccess {
  @PrimaryGeneratedColumn({ unsigned: true })
  poa_id: number;

  @Column({ unsigned: true })
  person_id: number;

  @Column({ length: 36, collation: 'utf8mb4_unicode_ci' })
  org_id: string;

  @Column({ type: 'timestamp', nullable: true })
  created_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date;
}