import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditCard } from '../credit-card.type';
import { CreditCardService } from '../service/credit-card.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class CreditCardListItemComponent implements OnInit {
  creditCard$;
  id;

  constructor(
    private creditCardService: CreditCardService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.creditCard$ = this.creditCardService.getCreditCard(this.id);
  }

  deleteCreditCard(creditCard: CreditCard) {
    console.log('Inside delete in list item');
    const cardNumber = creditCard.card_number;
    this.creditCardService.deleteCreditCard(cardNumber);
    this.router.navigate(['../']);
  }

  ngOnInit(): void {}
}
