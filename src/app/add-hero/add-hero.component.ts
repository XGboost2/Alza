import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { BehaviorSubject, observable, Observable, of } from 'rxjs';


@Component({
  selector: 'add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {

  @Output() heroData: EventEmitter<any> = new EventEmitter();
  newHero = ''
  existFlag:boolean = false;
  heroList : any = []
  addHero(){
    if(this.newHero == '')
    alert("Enter Any Name For Your Hero")
    else{
      for(let hero of this.heroList){
        if(hero.name.toLowerCase() === this.newHero.toLowerCase()){
          alert("This Hero already exist")
          this.existFlag=true
          this.newHero = ''
          break;
        }

      };
      if(!this.existFlag){
        var hero : Hero  = {id:this.getUniqueId(),name:this.newHero};
        this.heroList = this.heroService.addHero(hero)
        this.newHero = ''
        this.heroData.emit(this.heroList)
      }
    }
  }
  



  getUniqueId(){
    var sortArr = this.heroList.sort((a:Hero,b:Hero) => b.id - a.id)
    var uniqueId = sortArr[0].id + 1;
    return uniqueId;
  }

  constructor(private heroService:HeroService) { }

  ngOnInit(){
    this.heroService.getHeroes().subscribe(data => this.heroList = data)
  }

}
