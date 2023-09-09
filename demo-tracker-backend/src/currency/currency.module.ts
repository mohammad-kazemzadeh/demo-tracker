import { Module } from '@nestjs/common';
import { EventEmitter2, EventEmitterModule } from '@nestjs/event-emitter';
import { PrismaService } from 'src/services/prisma.service';
import { LatestCurrencyPriceGateway } from '../currency/latest-currency-price.gateway';
import { CurrencyController } from './currency.controller';
import { CurrencyService } from './currency.service';

@Module({
  imports: [EventEmitterModule.forRoot()],
  controllers: [CurrencyController],
  providers: [
    EventEmitter2,
    PrismaService,
    LatestCurrencyPriceGateway,
    CurrencyService,
  ],
})
export class CurrencyModule {}
