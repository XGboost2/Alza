import { Component, OnInit,OnChanges, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HeroPipe } from '../hero.pipe';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, public heroPipe:HeroPipe) { }

  ngOnInit() {
    this.getHeroes()
  }

  ngOnChanges(){
    
    this.getHeroes()
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        var heroList = heroes.sort((a,b) => b.id - a.id)
        this.heroes = heroList.slice(0, 5)});
  }

  updateHero(hero:Hero[]){
    var heroList = hero.sort((a,b) => b.id - a.id)
    this.heroes = heroList.slice(0, 5);
  }
}
