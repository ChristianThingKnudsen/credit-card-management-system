import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TransactionOverviewComponent } from './transaction/overview/overview.component';

const routes: Routes = [
  {
    path: 'credit-card',
    loadChildren: () =>
      import('./credit-card/credit-card.module').then(
        (m) => m.CreditCardModule
      ),
  },
  { path: '', redirectTo: '/credit-card/list', pathMatch: 'full' },
  {
    path: 'transactions',
    loadChildren: () =>
      import('./transaction/transaction.module').then(
        (m) => m.TransactionModule
      ),
  },
  //TODO: Should we add a page not found here? Look at exercise 2
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
