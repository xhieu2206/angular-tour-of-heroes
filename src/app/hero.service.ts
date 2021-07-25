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
}
