import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CreditCard } from '../credit-card.type';
import { switchMap } from 'rxjs/operators';
import { Transaction } from 'src/app/transaction/transaction.type';

@Injectable({
  providedIn: 'root',
})
export class CreditCardService {
  rootUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getCreditCards(): Observable<CreditCard[]> {
    const creditCards = this.http.get<CreditCard[]>(
      `${this.rootUrl}/credit_cards`
    );
    return creditCards;
  }

  getCreditCard(id: Number): Observable<CreditCard | undefined> {
    return this.http.get<CreditCard[]>(`${this.rootUrl}/credit_cards`).pipe(
      switchMap((list) => {
        let item = list[+id];
        return of(item);
      })
    );
  }

  deleteCreditCard(card_number: Number) {
    console.log(`Trying to remove creditcard with number: ${card_number}`);
    const url = `${this.rootUrl}/credit_cards/${card_number}`;
    console.log(url);
    this.http.delete(url).subscribe();
  }

  deleteTransaction(id: String) {
    console.log(`Trying to remove transaction with id: ${id}`);
    const url = `${this.rootUrl}/transactions/${id}`;
    console.log(url);
    this.http.delete(url).subscribe();
  }

  addCreditCard(creditCard: CreditCard) {
    const url = `${this.rootUrl}/credit_cards/`;
    console.log(url);
    this.http.post(url, creditCard).subscribe();
  }

  getTransactions(): Observable<Transaction[]> {
    const transactions = this.http.get<Transaction[]>(
      `${this.rootUrl}/transactions`
    );
    return transactions;
  }

  addTransaction(transaction: Transaction) {
    const url = `${this.rootUrl}/transactions/`;
    console.log(url);
    this.http.post(url, transaction).subscribe();
  }

  filterTransactions(card_number: number): Observable<Transaction[]> {
    let filteredTransactions: Transaction[] = [];

    this.getTransactions()
      .pipe(
        switchMap((list) => {
          for (let index = 0; index < list.length; index++) {
            let element = list[index];
            element.amount = Number(element.amount.toFixed(2));
            if (element.credit_card.card_number == card_number) {
              console.log('Transactions: ' + element.uid);
              filteredTransactions.push(element);
            }
          }
          return of(filteredTransactions);
        })
      )
      .subscribe();
    return of(filteredTransactions);
  }
}
