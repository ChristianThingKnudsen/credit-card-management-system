import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionOverviewComponent } from './overview/overview.component';
import { TransactionListComponent } from './list/list.component';
import { TransactionListItemComponent } from './list-item/list-item.component';
import { TransactionAddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TransactionOverviewComponent,
    TransactionListComponent,
    TransactionListItemComponent,
    TransactionAddComponent,
  ],
  imports: [CommonModule, TransactionRoutingModule, ReactiveFormsModule],
  exports: [
    TransactionOverviewComponent,
    TransactionListComponent,
    TransactionListItemComponent,
    TransactionAddComponent,
  ],
})
export class TransactionModule {}
