import { Pipe, PipeTransform } from '@angular/core';
import { CreditCard } from './credit-card.type';

@Pipe({
  name: 'expiration-date',
})
export class CreditCardPipe implements PipeTransform {
  transform(creditCard: CreditCard): String | null {
    //TODO return total expiration data
    return '';
  }
}
