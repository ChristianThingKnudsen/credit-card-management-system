import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreditCardService } from '../service/credit-card.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class CreditCardListItemComponent implements OnInit {
  
  creditCard$
  id

  constructor(private creditCardService: CreditCardService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params["id"]
    this.creditCard$ = this.creditCardService.getCreditCard(this.id)
  }

  ngOnInit(): void {}
}
