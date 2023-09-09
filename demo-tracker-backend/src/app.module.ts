import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';
import { CurrencyModule } from './currency/currency.module';

@Module({
  imports: [ScheduleModule.forRoot(), CurrencyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
