import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './models/Hero';
import { HEROES } from './data/mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHeroById(id: number): Promise<any> {
    return this.getHeroes().toPromise().then(heroes => {
      this.messageService.add(`HeroService: fetched hero with id=${id}`);
      return heroes.find(hero => hero.id === id);
    });

  }
}
