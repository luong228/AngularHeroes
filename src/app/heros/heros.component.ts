import { Component } from '@angular/core';
import { Hero } from '../interface/hero';
import { HEROES } from '../mock-heores';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css'],
})
export class HerosComponent {
  selectedHero? : Hero;
  onSelect(hero: Hero) : void {
    this.selectedHero = hero;
  }
  heroes = HEROES;
} 
