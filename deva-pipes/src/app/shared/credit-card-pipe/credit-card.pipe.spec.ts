import { CreditCardPipe } from './credit-card.pipe';

describe(CreditCardPipe.name, () => {
  let pipe = new CreditCardPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Should card number e quantity visible numbers return card number', () => {
    expect(pipe.transform('1234567890', 2)).toBe('12******90');
  });
});
