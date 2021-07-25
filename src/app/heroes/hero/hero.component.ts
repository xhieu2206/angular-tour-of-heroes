import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../models/Hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  @Input() hero: Hero | undefined;

  ngOnInit(): void {
  }

  constructor() {
  }

  ngOnChanges() {
    console.log(`CLOG ngOnChanges "hero": `, this.hero);
  }
}
