import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { InstallationsComponent } from './installations/installations.component';


const routes: Routes = [
  {
    path: '',
    component: AccueilComponent
  },
  {
    path: 'installations',
    component: InstallationsComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
