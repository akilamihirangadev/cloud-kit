import { ApiProperty } from "@nestjs/swagger";
import { GatewayReference } from "./gateway.array";
import { PreviousIntermentDto } from "./previousInterment.dto";
import { IsNotEmpty, Length } from "class-validator";

export class LocationDto {

  constructor(){}

  public reference: string;

  public org_id: string;

  public created_by: string;

  public updated_by: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @Length(0,100)
  public name: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @Length(0,100)
  public code: string;

  @ApiProperty()
  @Length(0,191)
  public description: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  public active: boolean;

  @ApiProperty()
  public lat: string;

  @ApiProperty()
  public long: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  public site: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  public remainsType: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  public locationType: string;

  @ApiProperty()
  public siteArea: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  public inventoryStatus: string;

  @ApiProperty()
  public intraMapUrl: string;

  @ApiProperty()
  intermentAlert: string;

  @ApiProperty()
  public rightholder: string;

  @ApiProperty()
  public previousInterment: PreviousIntermentDto;

  public requestReference: GatewayReference;
}