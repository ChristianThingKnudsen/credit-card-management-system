import { Component, OnInit } from '@angular/core';
import { CreditCardService } from 'src/app/credit-card/service/credit-card.service';

@Component({
  selector: 'transaction-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class TransactionListComponent implements OnInit {
  transactions;

  constructor(private creditCardService$: CreditCardService) {
    this.transactions = this.creditCardService$.getTransactions();
    console.log(this.transactions);
  }

  ngOnInit(): void {}
}
