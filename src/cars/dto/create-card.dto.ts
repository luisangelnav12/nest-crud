import { IsString, MinLength } from "class-validator";

export class CreateCarDto{
  @IsString({message: 'Must be a string2'})
  readonly brand: string;
  @IsString()
  @MinLength(3)
  readonly model: string;
}