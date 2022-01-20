import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';


import { AppRoutingModule } from './app-routing.module';
import { HeroPipe } from './hero.pipe';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { HeroDetailModule } from './hero-detail/hero-detail.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HeroDetailModule
  ],
  providers:[HeroPipe],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroPipe,
    AddHeroComponent,
    HeroesComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
