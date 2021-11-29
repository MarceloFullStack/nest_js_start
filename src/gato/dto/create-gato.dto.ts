import { isArray, IsArray, isInt, IsInt, isNumber, IsString } from "class-validator";
import { Dono } from "src/dono/entities/dono.entity";

export class CreateGatoDto {
    @IsString()
    name: string;

    @IsInt()
    idade: number;
}
