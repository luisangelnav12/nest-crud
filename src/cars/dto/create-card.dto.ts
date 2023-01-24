import { IsString } from "class-validator";

export class CreateCarDto{
  @IsString({message: 'Must be a string2'})
  readonly brand: string;
  @IsString()
  readonly model: string;
}