import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionOverviewComponent } from './overview/overview.component';
import { TransactionListComponent } from './list/list.component';
import { TransactionListItemComponent } from './list-item/list-item.component';
import { TransactionAddComponent } from './add/add.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TransactionOverviewComponent,
    TransactionListComponent,
    TransactionListItemComponent,
    TransactionAddComponent,
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    SharedModule,
  ],
  exports: [
    TransactionOverviewComponent,
    TransactionListComponent,
    TransactionListItemComponent,
    TransactionAddComponent,
  ],
})
export class TransactionModule {}
