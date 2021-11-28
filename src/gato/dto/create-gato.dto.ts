import { IsArray, isInt, IsInt, isNumber, IsString } from "class-validator";

export class CreateGatoDto {
    @IsInt()
    id: number;

    @IsString()
    name: string;

    @IsInt()
    age: number;

    @IsString({each: true})
    breed: Array<string>;
}
