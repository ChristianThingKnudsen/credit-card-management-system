import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionAddComponent } from './add/add.component';
import { TransactionListComponent } from './list/list.component';
import { TransactionOverviewComponent } from './overview/overview.component';

const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  {
    path: 'overview',
    component: TransactionOverviewComponent,
  },
  {
    path: 'list',
    component: TransactionListComponent,
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
