import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from '../credit-card.type';
import { CreditCardService } from '../service/credit-card.service';

@Component({
  selector: 'credit-card-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class CreditCardListComponent implements OnInit {
  creditCards: Observable<CreditCard[]>;

  constructor(private creditCardService$: CreditCardService) {
    this.creditCards = this.creditCardService$.getCreditCards();
  }

  ngOnInit(): void {
    console.log('Credit card list on init ');
  }
}
