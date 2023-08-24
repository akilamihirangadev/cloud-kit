import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { ObjectId } from 'typeorm';
import { GatewayReference } from '../../dto/gateway.array';
export type PersonDocument = HydratedDocument<Person>;

@Schema()
export class Person {

  @Prop({ type: 'string', default: () => new Types.ObjectId().toString() })
  _id: ObjectId;

  @Prop()
  reference: string;

  @Prop()
  org_id: string;

  @Prop()
  title: string;

  @Prop()
  titleId: number;

  @Prop()
  maidenName: string;

  @Prop()
  firstName: string;

  @Prop()
  middleName: string;

  @Prop()
  lastName: string;

  @Prop()
  active: boolean;

  @Prop()
  personStatus: string;

  @Prop()
  personStatusId: number;

  @Prop()
  dateOfBirth: string;

  @Prop()
  dateOfDeath: string;

  @Prop()
  placeOfBirth: string;

  @Prop()
  placeOfDeath: string;

  @Prop()
  caseOfDeath: string;

  @Prop()
  occupation: string;

  @Prop()
  veteran: boolean;

  @Prop()
  veteranServices: string;

  @Prop()
  additionalDetails: string;

  @Prop()
  created_by: string;

  @Prop()
  updated_by: string;

  @Prop()
  profileResources: string[];

  @Prop()
  documents: PersonDoc[];

  @Prop()
  addresses: Address[];

  @Prop()
  phones: Phone[];

  @Prop()
  emails: Email[]
  @Prop()
  relationships: Relationship[];

  @Prop()
  requestReference: GatewayReference;
}

export const PersonSchema = SchemaFactory.createForClass(Person);


export class Address {
    
  reference: string;
  type: string;
  line1: string;
  line2: string;
  line3: string;
  line4: string;
  city: string;
  country: string;
  state: string;
  postCode: string;

}

export class PersonDoc{
  reference:string;
  name:string;
  url:string;
}

export class Email{
  reference: string;
  address: string;
  type: string;
}

export class PersonStatus{
  id: number;
  option_value: string;
  sort_order: number;
  is_active: number;
  is_editable: number;
  is_default_option: number;
  deleted_at: Date;
  created_at: Date;
  updated_at: Date;
}

export class PersonId {
  reference: string;
  get: string;
  constructor(reference: string, get: string) {
      this.reference = reference;
      this.get = get;
  }
}

export class Phone {
  reference: string;
  number: string;
  type: string;
}

export class Relationship {
  reference: string;
  relationshipId: number;
  person: PersonId;
}