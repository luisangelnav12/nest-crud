import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid} from 'uuid';
import { CreateCarDto } from './dto/create-card.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {

  private cars:Car[]= [
    // {
    //   id: uuid(),
    //   brand: 'Ford',
    //   model: 'Fusion Hybrid',
    // },
    // {
    //   id: uuid(),
    //   brand: 'Tesla',
    //   model: 'Model S',
    // },
    // {
    //   id: uuid(),
    //   brand: 'Toyota',
    //   model: 'Prius',
    // }
  ];

  findAll() {
    return this.cars;
  }
  findOneById(id: string) {

    const car=this.cars.find(car => car.id === id);
    if (!car) throw new NotFoundException(`Car #${id} not found`);

    return car
  }
  create(createCarDto: CreateCarDto) {
  const car:Car={
    id: uuid(),
    ...createCarDto//spread operator to copy all properties from createCarDto

  }
  this.cars.push(car);
  return car;
  }
  update(id: string, updateCarDto: UpdateCarDto) {
    let cardDB=this.findOneById(id);
    this.cars=this.cars.map(car=>{
      if (car.id === id) {

        cardDB={
          ...cardDB,
          ...updateCarDto,
          id
        }
        return cardDB;
      }
        return car;
      });
      return cardDB;
    }
  delete(id:string){
   const car = this.findOneById(id);
    this.cars=this.cars.filter(car=>car.id !== id);

  }
  fillCarsWithSeedData(cars:Car[]){
    this.cars=cars;
  }
}
