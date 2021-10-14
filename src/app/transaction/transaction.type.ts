import { CreditCard } from '../credit-card/credit-card.type';

export interface Transaction {
  credit_card: CreditCard;
  uid: String;
  amount: number;
  comment: String;
  date: number;
  currency: String;
}
