import { IsString, IsInt } from 'class-validator';

export class CreateDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly breed: string;
}
