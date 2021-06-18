import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

import { InstallationsComponent } from './installations/installations.component';
import { CarouselComponent } from './accueil/carousel/carousel.component';
import { AccueilComponent } from './accueil/accueil.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    CarouselComponent,
    InstallationsComponent,
    AccueilComponent,
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
