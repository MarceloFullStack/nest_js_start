import { IsArray, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Gato } from 'src/gato/entities/gato.entity';
export class CreateDonoDto {
    @ApiProperty()
    @IsString()
    name: string;
}
