import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditCardRoutingModule } from './credit-card-routing.module';
import { CreditCardAddComponent } from './add/add.component';
import { CreditCardListComponent } from './list/list.component';
import { CreditCardListItemComponent } from './list-item/list-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionListItemComponent } from '../transaction/list-item/list-item.component';
import { TransactionModule } from '../transaction/transaction.module';

@NgModule({
  declarations: [
    CreditCardAddComponent,
    CreditCardListComponent,
    CreditCardListItemComponent,
  ],
  imports: [
    CommonModule,
    CreditCardRoutingModule,
    ReactiveFormsModule,
    TransactionModule,
  ],
  exports: [
    CreditCardAddComponent,
    CreditCardListComponent,
    CreditCardListItemComponent,
  ],
})
export class CreditCardModule {}
