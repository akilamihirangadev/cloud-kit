import { ApiProperty } from "@nestjs/swagger";

export class PreviousIntermentDto {

    @ApiProperty()
    reference: string;

    @ApiProperty({ required: true })
    firstName: string;
  
    @ApiProperty({ required: true })
    lastName: string;
  
    middleName: string;
  
    @ApiProperty({ required: true })
    depth: string;
  }