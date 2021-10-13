import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreditCardService } from 'src/app/credit-card/service/credit-card.service';
import { Transaction } from '../transaction.type';
import { v4 as uid } from 'uuid';
import { CreditCard } from 'src/app/credit-card/credit-card.type';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class TransactionAddComponent implements OnInit {
  creditCards$: Observable<CreditCard[]>;

  transactionForm = this.formBuilder.group({
    credit_card: ['', Validators.required],
    amount: ['', [Validators.required]],
    currency: ['', [Validators.required]],
    date: ['', [Validators.required]],
    comment: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private creditCardService: CreditCardService,
    private router: Router
  ) {
    this.creditCards$ = this.creditCardService.getCreditCards();
  }

  ngOnInit(): void {}

  addTransaction() {
    console.log(this.transactionForm.value);

    const transaction: Transaction = {
      uid: uid(),
      credit_card: this.transactionForm.value.credit_card,
      amount: this.transactionForm.value.amount,
      currency: this.transactionForm.value.currency,
      date: this.transactionForm.value.date,
      comment: this.transactionForm.value.comment,
    };
    console.log(transaction);
    console.log(JSON.stringify(transaction.credit_card));
    this.creditCardService.addTransaction(transaction);

    this.router.navigate(['../']);
  }

  get amount(): FormControl {
    return this.transactionForm.get('amount') as FormControl;
  }

  get currency(): FormControl {
    return this.transactionForm.get('currency') as FormControl;
  }

  get date(): FormControl {
    return this.transactionForm.get('date') as FormControl;
  }

  get credit_card(): FormControl {
    return this.transactionForm.get('credit_card') as FormControl;
  }
}
