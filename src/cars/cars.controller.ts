import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';


@Controller('cars')
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
  createCard(@Body() body:any ){

    return body;
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