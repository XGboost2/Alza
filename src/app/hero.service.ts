import { Injectable } from '@angular/core';

import { BehaviorSubject, observable, Observable, of } from 'rxjs';

import { Hero } from './hero';



@Injectable({ providedIn: 'root' })
export class HeroService {


  heroList = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];
 


  constructor() { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(this.heroList);
    return heroes;
  }

  addHero(param:Hero){
    this.heroList.push(param)
    return this.heroList
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = this.heroList.find(h => h.id === id)!;
    return of(hero);
  }
}
