import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionOverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [TransactionOverviewComponent],
  imports: [CommonModule, TransactionRoutingModule],
})
export class TransactionModule {}
