import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionAddComponent } from './add/add.component';
import { TransactionListItemComponent } from './list-item/list-item.component';
import { TransactionListComponent } from './list/list.component';
import { TransactionOverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionOverviewComponent,
  },
  {
    path: 'list',
    component: TransactionListComponent,
  },
  {
    path: 'list/:id',
    component: TransactionListItemComponent,
  },
  {
    path: 'add',
    component: TransactionAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionRoutingModule {}
