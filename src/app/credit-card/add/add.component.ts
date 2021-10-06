import { Component, OnInit } from '@angular/core';
import { CreditCard } from '../credit-card.type';
import { FormBuilder } from '@angular/forms';
import { CreditCardService } from '../service/credit-card.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class CreditCardAddComponent implements OnInit {
  creditCardForm = this.formBuilder.group({
    card_number: [''],
    cardholder_name: [''],
    csc_code: [''],
    expiration_date_month: [''],
    expiration_date_year: [''],
    issuer: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private creditCardService: CreditCardService
  ) {}

  ngOnInit(): void {
    console.log('Credit card add oninit!');
  }

  addCreditCard() {
    console.log(this.creditCardForm.value);
    const creditCard: CreditCard = {
      card_number: this.creditCardForm.value.card_number,
      csc_code: this.creditCardForm.value.csc_code,
      cardholder_name: this.creditCardForm.value.cardholder_name,
      expiration_date_month: this.creditCardForm.value.expiration_date_month,
      expiration_date_year: this.creditCardForm.value.expiration_date_year,
      issuer: this.creditCardForm.value.issuer,
    };
    this.creditCardService.addCreditCard(creditCard);
  }
}
