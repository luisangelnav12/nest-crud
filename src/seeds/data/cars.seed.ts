import { Car } from "src/cars/interfaces/car.interface";
import {v4 as uuid} from 'uuid';
export const CARS_SEED:Car[]=[
  {
    id: uuid(),
    brand: 'Ford',
    model: 'Fusion Hybrid',
  },
  {
    id: uuid(),
    brand: 'Tesla',
    model: 'Model S',
  }

]