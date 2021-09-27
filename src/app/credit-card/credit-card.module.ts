import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditCardRoutingModule } from './credit-card-routing.module';
import { CreditCardAddComponent } from './add/add.component';

@NgModule({
  declarations: [CreditCardAddComponent],
  imports: [CommonModule, CreditCardRoutingModule],
})
export class CreditCardModule {}
