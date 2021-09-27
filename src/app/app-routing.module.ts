import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'users',
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
