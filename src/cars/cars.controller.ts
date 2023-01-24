import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-card.dto';


@Controller('cars')
@UsePipes(ValidationPipe)
export class CarsController {

constructor(
  private readonly carsService: CarsService
) {}


  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id',ParseUUIDPipe) id:string) {

    return this.carsService.findOneById(id);
  }
  @Post()

  createCard(@Body() createCarDto:CreateCarDto ){

    return createCarDto;
  }
  @Patch(':id')
  updateCard(@Body() body:any ){

    return body;
  }
  @Delete(':id')
  deleteCard( @Param('id',ParseIntPipe)  id:number){

    return {
      message: `Car #${id} deleted`,
      method: 'DELETE'
    };
  }



  }