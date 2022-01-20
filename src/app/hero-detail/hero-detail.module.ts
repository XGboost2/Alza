import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './hero-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroPipe } from '../hero.pipe';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: 'detail/:id', component: HeroDetailComponent }
]

@NgModule({
  declarations: [HeroDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})



export class HeroDetailModule { 

}
