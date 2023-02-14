import { PartialType } from '@nestjs/mapped-types';
import { CreateSalatDto } from './create-salat.dto';

export class UpdateSalatDto extends PartialType(CreateSalatDto) {}
