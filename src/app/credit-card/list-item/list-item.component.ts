import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
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
  transactions$: any;

  constructor(
    private creditCardService: CreditCardService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.creditCard$ = this.creditCardService.getCreditCard(this.id);

    this.transactions$ = this.creditCard$.pipe(
      switchMap((result) => {
        return this.creditCardService.filterTransactions(
          Number(result!.card_number)
        );
      })
    );
  }

  deleteCreditCard(creditCard: CreditCard) {
    console.log('Inside delete in list item');
    const cardNumber = creditCard.card_number;
    this.creditCardService.deleteCreditCard(cardNumber);
    this.router.navigate(['../']);
  }

  ngOnInit(): void {}
}
