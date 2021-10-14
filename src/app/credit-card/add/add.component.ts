import { Component, OnInit } from '@angular/core';
import { CreditCard } from '../credit-card.type';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CreditCardService } from '../service/credit-card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class CreditCardAddComponent implements OnInit {
  creditCardForm: any;
  card_number_min: number = 7;
  card_number_max: number = 16;
  expiration_month_min: number = 1;
  expiration_month_max: number = 12;
  expiration_year_min: number = 1;
  expiration_year_max: number = 31;

  constructor(
    private formBuilder: FormBuilder,
    private creditCardService: CreditCardService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('Credit card add oninit!');
    this.creditCardForm = this.formBuilder.group({
      card_number: [
        '',
        [
          Validators.required,
          Validators.min(1000000), // min 7 length
          Validators.max(9999999999999999), // max 16 length
        ],
      ],
      cardholder_name: ['', [Validators.required]],
      csc_code: [
        '',
        [Validators.required, Validators.min(100), Validators.max(999)],
      ],
      expiration_date_month: [
        '',
        [
          Validators.required,
          Validators.min(this.expiration_month_min),
          Validators.max(this.expiration_month_max),
        ],
      ],
      expiration_date_year: [
        '',
        {
          validators: [
            Validators.required,
            Validators.min(this.expiration_year_min),
            Validators.max(this.expiration_year_max),
          ],
          updateOn: 'change',
        },
      ],
      issuer: [''],
    });
  }

  addCreditCard() {
    if (this.creditCardForm.invalid) {
    } else {
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

      this.router.navigate(['../']);
    }
  }

  get card_number(): FormControl {
    return this.creditCardForm.get('card_number') as FormControl;
  }

  get cardholder_name(): FormControl {
    return this.creditCardForm.get('cardholder_name') as FormControl;
  }

  get csc_code(): FormControl {
    return this.creditCardForm.get('csc_code') as FormControl;
  }

  get expiration_date_month(): FormControl {
    return this.creditCardForm.get('expiration_date_month') as FormControl;
  }

  get expiration_date_year(): FormControl {
    return this.creditCardForm.get('expiration_date_year') as FormControl;
  }
}
