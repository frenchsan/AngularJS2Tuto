import {Component,OnInit} from '@angular/core';
import {Hero} from './hero';
import { HeroService } from './hero.service';


@Component ({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit { 
     heroes : Hero[];     
      ngOnInit(): void {        
    this.getHeroes();     
  }

 getHeroes(): void {
    this.heroService.getHeroes().then(bip => {this.heroes = bip.slice(1,5); console.log(bip)});
    
  }

    constructor(private heroService: HeroService) { }

  gotoDetail(hero: Hero): void { /* not implemented yet */}
}



