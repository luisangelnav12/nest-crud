import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { BRAND_SEED } from './data/brands.seed';
import { CARS_SEED } from './data/cars.seed';


@Injectable()
export class SeedsService {

  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) { }


  populateDB() {
    // CARS_SEED
    // BRAND_SEED
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandsService.fillBrandsWithSeedData(BRAND_SEED);
    return "DB populated with seed data"
  }


}