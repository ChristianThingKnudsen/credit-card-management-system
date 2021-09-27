import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditCardRoutingModule } from './credit-card-routing.module';
import { CreditCardAddComponent } from './add/add.component';
import { CreditCardListComponent } from './list/list.component';
import { CreditCardListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [
    CreditCardAddComponent,
    CreditCardListComponent,
    CreditCardListItemComponent,
  ],
  imports: [CommonModule, CreditCardRoutingModule],
})
export class CreditCardModule {}
