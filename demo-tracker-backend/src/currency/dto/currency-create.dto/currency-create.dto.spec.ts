import { CurrencyCreateDto } from './currency-create.dto';

describe('CurrencyCreateDto', () => {
  it('should be defined', () => {
    expect(new CurrencyCreateDto()).toBeDefined();
  });
});
