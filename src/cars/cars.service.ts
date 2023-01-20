import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

  private cars= [
    {
      id: 1,
      make: 'Ford',
      model: 'Fusion Hybrid',
    },
    {
      id: 2,
      make: 'Tesla',
      model: 'Model S',
    },
    {
      id: 3,
      make: 'Toyota',
      model: 'Prius',
    }
  ];

  findAll() {
    return this.cars;
  }
  findOneById(id: number) {

    const car=this.cars.find(car => car.id === id);
    if (!car) throw new NotFoundException(`Car #${id} not found`);

    return car
  }

}
