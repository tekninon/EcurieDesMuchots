import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { InstallationsComponent } from './installations/installations.component';


const routes: Routes = [
  {
    path: '',
    component: CarouselComponent
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
