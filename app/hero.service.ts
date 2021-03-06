import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        console.log("get heroes");
        return Promise.resolve(HEROES);
    } // stub

    getHeroesSlowly(): Promise<Hero[]> {
  return new Promise<Hero[]>(resolve =>
    setTimeout(resolve, 0)) // delay 2 seconds
    .then(() => this.getHeroes());
    }
}