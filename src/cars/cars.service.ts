import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid} from 'uuid';

@Injectable()
export class CarsService {

  private cars:Car[]= [
    {
      id: uuid(),
      brand: 'Ford',
      model: 'Fusion Hybrid',
    },
    {
      id: uuid(),
      brand: 'Tesla',
      model: 'Model S',
    },
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Prius',
    }
  ];

  findAll() {
    return this.cars;
  }
  findOneById(id: string) {

    const car=this.cars.find(car => car.id === id);
    if (!car) throw new NotFoundException(`Car #${id} not found`);

    return car
  }

}
