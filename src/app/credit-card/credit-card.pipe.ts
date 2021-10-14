import { Pipe, PipeTransform } from '@angular/core';
import { CreditCard } from './credit-card.type';

@Pipe({
  name: 'expiration',
})
export class CreditCardPipe implements PipeTransform {
  transform(creditCard: CreditCard): Date | null {
    return new Date(
      Number(creditCard.expiration_date_year) - 1,
      Number(creditCard.expiration_date_month) - 1
    );
  }
}
