import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from 'src/app/credit-card/credit-card.type';
import { CreditCardService } from 'src/app/credit-card/service/credit-card.service';

@Component({
  selector: 'transaction-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class TransactionListComponent implements OnInit {
  transactions$;
  creditCards$: Observable<CreditCard[]>;

  constructor(private creditCardService: CreditCardService) {
    this.transactions$ = this.creditCardService.getTransactions();
    this.creditCards$ = this.creditCardService.getCreditCards();
    console.log(this.transactions$);
  }

  ngOnInit(): void {}

  filterTransactions() {
    const card_number = (<HTMLInputElement>(
      document.getElementById('card_number')
    )).value;
    console.log('Card number: ', card_number);

    this.transactions$ = this.creditCardService.filterTransactions(
      Number(card_number)
    );
    console.log('List: ', this.transactions$);
  }
}
