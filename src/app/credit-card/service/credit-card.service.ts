import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CreditCard } from '../credit-card.type';

@Injectable({
  providedIn: 'root'
})

export class CreditCardService {
  rootUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) {}
  
  getCreditCards(): Observable<CreditCard[]> {
    console.log("Path: " + `${this.rootUrl}/credit_cards`)
    const creditCards = this.http.get<CreditCard[]>(`${this.rootUrl}/credit_cards`)
    console.log("CreditCards: " + creditCards)
    return creditCards
  }

  getCreditCard(id: any): Observable<CreditCard> {
    const creditCards = this.http.get<CreditCard[]>(`${this.rootUrl}/credit_cards`)
    let card

    creditCards.subscribe( creditCards => {
      card = creditCards[id]
      return card
    })
    
    console.log("Card: " + card)

    if (card != null) {
      return card //TODO Does not work
    } else {
      throw new Error(`ID ${id} was not found`)
    }
  }
}
