import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CreditCard } from '../credit-card.type';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CreditCardService {
  rootUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) {}
  
  getCreditCards(): Observable<CreditCard[]> {
    const creditCards = this.http.get<CreditCard[]>(`${this.rootUrl}/credit_cards`)
    return creditCards
  }

  getCreditCard(id: any): Observable<CreditCard | undefined> {
    return this.http.get<CreditCard[]>(`${this.rootUrl}/credit_cards`).pipe(
      switchMap(list => {
        let item = list[+id]
        return of(item)
      }
    ))
  }
}

