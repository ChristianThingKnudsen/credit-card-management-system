import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditCardRoutingModule } from './credit-card-routing.module';
import { CreditCardAddComponent } from './add/add.component';
import { CreditCardListComponent } from './list/list.component';
import { CreditCardListItemComponent } from './list-item/list-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionModule } from '../transaction/transaction.module';
import { CreditCardPipe } from './credit-card.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    CreditCardAddComponent,
    CreditCardListComponent,
    CreditCardListItemComponent,
    CreditCardPipe,
  ],
  imports: [
    CommonModule,
    CreditCardRoutingModule,
    ReactiveFormsModule,
    TransactionModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    CreditCardAddComponent,
    CreditCardListComponent,
    CreditCardListItemComponent,
  ],
})
export class CreditCardModule {}
