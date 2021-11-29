import { IsArray, IsString } from 'class-validator';
import { Gato } from 'src/gato/entities/gato.entity';
export class CreateDonoDto {
    @IsString()
    name: string;
}
