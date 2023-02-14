import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PizzaModule } from './pizza/pizza.module';
import { PastaModule } from './pasta/pasta.module';
import { SchnitzelModule } from './schnitzel/schnitzel.module';
import { SnacksModule } from './snacks/snacks.module';
import { SalatModule } from './salat/salat.module';

@Module({
  imports: [PizzaModule, PastaModule, SchnitzelModule, SnacksModule, SalatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
