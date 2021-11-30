import { IntersectionType, PickType } from '@nestjs/swagger';
import { CreateGatoDto } from './create-gato.dto';

export class UpdateGatoDto extends IntersectionType(
    CreateGatoDto,
    PickType(CreateGatoDto, ['idade', 'name']),
) {}
