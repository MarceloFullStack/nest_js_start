import { isArray, IsArray, isInt, IsInt, isNumber, IsString } from "class-validator";
import { Dono } from "src/dono/entities/dono.entity";
import { ApiProperty } from '@nestjs/swagger';
export class CreateGatoDto {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty({
        description: 'Idade do animal',
        minimum: 0,
        default: 1,
      })
    @IsInt()
    idade: number;
}
