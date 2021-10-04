import { Component, OnInit } from '@angular/core';
import { CreditCard } from '../credit-card.type';
import { CreditCardService } from '../service/credit-card.service';

@Component({
  selector: 'credit-card-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class CreditCardListComponent implements OnInit {
  creditCards
  
  constructor(private creditCardService$:CreditCardService) {
    this.creditCards = this.creditCardService$.getCreditCards()
    console.log(this.creditCards)
  }

  ngOnInit(): void {}
}
