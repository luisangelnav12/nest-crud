import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import { SeedsModule } from './seeds/seeds.module';

@Module({
  imports: [CarsModule, BrandsModule, SeedsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
