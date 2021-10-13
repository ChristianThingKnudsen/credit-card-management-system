import { Pipe, PipeTransform } from '@angular/core';
import { CreditCard } from './credit-card.type';

@Pipe({
  name: 'validCreditCards',
})
export class CreditCardPipe implements PipeTransform {
  transform(creditCard: CreditCard): String | null {
    //TODO return total expiration data
    return '';
  }
}
