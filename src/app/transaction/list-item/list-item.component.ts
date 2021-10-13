import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditCardService } from 'src/app/credit-card/service/credit-card.service';
import { Transaction } from '../transaction.type';

@Component({
  selector: 'transaction-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class TransactionListItemComponent implements OnInit {
  @Input() transaction!: Transaction;

  constructor(
    private creditCardService: CreditCardService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  deleteTransaction(id: String) {
    this.creditCardService.deleteTransaction(id);
    window.location.reload();
  }
}
