import { CreditCard } from '../credit-card/credit-card.type';

export interface Transaction {
  credit_card: CreditCard;
  uid: String;
  amount: Number;
  comment: String;
  date: Number; // TODO: Should maybe be a date?
  currency: String;
}
