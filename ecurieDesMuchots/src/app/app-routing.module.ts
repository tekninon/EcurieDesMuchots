import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { InstallationsListComponent } from './installations/installations-list/installations-list.component';
import { PrestationsComponent } from './prestations/prestations.component';


const routes: Routes = [
  {
    path: '',
    component: AccueilComponent
  },
  {
    path: 'installations',
    component: InstallationsListComponent
  },
  {
    path: 'prestations',
    component: PrestationsComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
