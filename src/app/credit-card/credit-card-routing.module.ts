import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditCardAddComponent } from './add/add.component';
import { CreditCardListItemComponent } from './list-item/list-item.component';
import { CreditCardListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', redirectTo: 'add', pathMatch: 'full' },
  {
    path: 'add',
    component: CreditCardAddComponent,
  },
  {
    path: 'list',
    component: CreditCardListComponent,
  },
  {
    path: 'list/:id',
    component: CreditCardListItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreditCardRoutingModule {}
