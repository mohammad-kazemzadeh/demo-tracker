import {
  Body,
  Controller,
  Get,
  Post,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { CurrencyCreateDto } from './dto/currency-create.dto/currency-create.dto';

@Controller('currencies')
export class CurrencyController {
  constructor(private currencyService: CurrencyService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createCryptoDto: CurrencyCreateDto) {
    return this.currencyService.createCurrency(createCryptoDto);
  }

  @Get()
  async getAllCurrencies() {
    return this.currencyService.getAllCurrencies();
  }
}
