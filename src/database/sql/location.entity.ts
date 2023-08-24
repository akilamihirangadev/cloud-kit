import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm';
import { NoSqlLocation } from '../..';

@Entity({name:'locations'})
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'old_site_id', nullable: true })
  oldSiteId: number;

  @Column({ length: 191, nullable: true })
  code: string;

  @Column({ name: 'inventory_status_id', nullable: true })
  inventoryStatusId: number;

  @Column({ name: 'remains_type_id', nullable: true })
  remainsTypeId: number;

  @Column({ name: 'location_type_id', nullable: true })
  locationTypeId: number;

  @Column({ name: 'is_unlimited_capacity', nullable: true })
  isUnlimitedCapacity: boolean;

  @Column({ name: 'interment_capacity', nullable: true })
  intermentCapacity: number;

  @Column({ name: 'no_of_interments_used', nullable: true })
  noOfIntermentsUsed: number;

  @Column({ name: 'headstone_memorial_details', type: 'text', nullable: true })
  headstoneMemorialDetails: string;

  @Column({ name: 'is_point_of_interest', nullable: true })
  isPointOfInterest: boolean;

  @Column({ name: 'point_of_interest_details', type: 'text', nullable: true })
  pointOfInterestDetails: string;

  @Column({ length: 191, nullable: true })
  latitude: string;

  @Column({ length: 191, nullable: true })
  longitude: string;

  @Column({ name: 'added_source', length: 191, nullable: true })
  addedSource: string;

  @Column({ name: 'site_area_id', nullable: true })
  siteAreaId: number;

  @Column({ name: 'holder_of_right_person_id', nullable: true })
  holderOfRightPersonId: number;

  @Column({ length: 191, nullable: true })
  name: string;

  @Column({ length: 191, nullable: true })
  description: string;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  @Column({ name: 'created_at', nullable: true })
  createdAt: Date;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt: Date;

  @Column({ name: 'opus_xi_location_id', type: 'bigint', nullable: true })
  opusXiLocationId: number;

  @Column({ name: 'tenant_id', length: 36 })
  tenantId: string;

  @Column({ name: 'created_by', length: 36, nullable: true })
  createdBy: string;

  @Column({ name: 'updated_by', length: 36, nullable: true })
  updatedBy: string;

  @Column({ name: 'map_project_id', nullable: true })
  mapProjectId: number;

  @Column({ name: 'lot_size', nullable: true })
  lotSize: number;

  @Column({ name: 'plot_number', length: 191, nullable: true })
  plotNumber: string;

  @Column({ name: 'section_or_area_id', nullable: true })
  sectionOrAreaId: number;

  @Column({ name: 'intra_map_url', length: 500, nullable: true })
  intraMapUrl: string;

  @Column({ name: 'terr_id', nullable: true })
  terrId: number;

  @Column({ name: 'allow_proxy_vote', default: 0 })
  allowProxyVote: number;

  @Column({ name: 'interment_alerts', length: 500, nullable: true })
  intermentAlerts: string;

  @Column({ name: 'reference_id', length: 255 })
  reference: string;

  payloadReference:NoSqlLocation;

}