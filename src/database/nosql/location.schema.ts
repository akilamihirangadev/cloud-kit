import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { GatewayReference } from '../../dto/gateway.array';
import { ObjectId } from 'typeorm';
import { Types } from 'mongoose';

@Schema()
export class Location {
  @Prop({ type: 'string', default: () => new Types.ObjectId().toString() })
  _id: ObjectId;

  @Prop()
  reference: string;

  @Prop()
  name: string;

  @Prop()
  code: string;

  @Prop()
  org_id:string;

  @Prop()
  created_by:string;

  @Prop()
  updated_by:string;

  @Prop()
  description: string;

  @Prop({ default: true })
  active: boolean;

  @Prop()
  lat: string;

  @Prop()
  long: string;

  @Prop()
  site: string;

  @Prop()
  remainsType: string;

  @Prop()
  siteArea: string;

  @Prop()
  inventoryStatus: string;

  @Prop()
  locationType: string;

  @Prop()
  intraMapUrl: string;

  @Prop()
  intermentAlert: string;

  @Prop()
  rightholder: string;

  @Prop({type:'object'})
  previousInterment: {
    reference: string;
    firstName: string;
    lastName: string;
    middleName: string;
    depth: string;
  };

  @Prop()
  public requestReference: GatewayReference;
}

export const LocationSchema = SchemaFactory.createForClass(Location);