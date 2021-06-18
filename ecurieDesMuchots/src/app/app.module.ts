import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

import { CarouselComponent } from './accueil/carousel/carousel.component';
import { AccueilComponent } from './accueil/accueil.component';
import { InstallationsDetailComponent } from './installations/installations-detail/installations-detail.component';
import { InstallationsListComponent } from './installations/installations-list/installations-list.component';
import { PrestationsComponent } from './prestations/prestations.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    CarouselComponent,
    InstallationsListComponent,
    AccueilComponent,
    InstallationsDetailComponent,
    PrestationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
