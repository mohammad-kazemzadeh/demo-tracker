import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Interval, SchedulerRegistry } from '@nestjs/schedule';
import { Prisma, PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/services/prisma.service';
import { CurrencyCreateDto } from './dto/currency-create.dto/currency-create.dto';

@Injectable()
export class CurrencyService {
  constructor(
    private readonly schedulerRegistry: SchedulerRegistry,
    private prisma: PrismaService,
    private eventEmitter: EventEmitter2,
  ) {}

  @Interval(2000)
  async generateCurrencyPriceWithInterval() {
    const randomPrice = 27000 + Math.random() * 1000;
    try {
      const bitcoinPriceData = {
        currency: 'BTC',
        price: randomPrice,
      };

      // await this.prisma.currencyPrice.create({
      //   data: bitcoinPriceData,
      // });

      // Store
      await this.createCurrencyPrice(bitcoinPriceData);

      console.log(`Updated BTC price: ${randomPrice} USD`);
    } catch (error) {
      console.error('Error creating random Bitcoin price:', error);
    }
  }

  async createCurrency(
    CurrencyCreateDto: CurrencyCreateDto /** Prisma.CurrencyCreateInput **/,
  ) {
    return this.prisma.currency.create({
      data: CurrencyCreateDto,
    });
  }

  async getAllCurrencies() {
    return this.prisma.currency.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async createCurrencyPrice(data: Prisma.CurrencyPriceCreateInput) {
    const newEntry = await this.prisma.currencyPrice.create({ data });
    this.eventEmitter.emit('priceUpdate', newEntry);
    return newEntry;
  }

  async getLatestCurrencyPrice() {
    return this.prisma.currencyPrice.findFirst({
      orderBy: { createdAt: 'desc' },
    });
  }
}
