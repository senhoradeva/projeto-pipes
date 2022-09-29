import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard',
})
export class CreditCardPipe implements PipeTransform {
  transform(cardNumber: string, visibleDigits: number): string {
    let firstVisibleNumbers = cardNumber.slice(0, visibleDigits);
    let maskedCard = cardNumber.slice(visibleDigits, -visibleDigits);
    let lastVisibleNumbers = cardNumber.slice(-visibleDigits);

    const result =  firstVisibleNumbers +
    maskedCard.replace(/./g, '*') +
    lastVisibleNumbers;

    return (
     result
    );
  }
}
