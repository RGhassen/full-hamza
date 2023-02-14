import { PartialType } from '@nestjs/mapped-types';
import { CreateSchnitzelDto } from './create-schnitzel.dto';

export class UpdateSchnitzelDto extends PartialType(CreateSchnitzelDto) {}
