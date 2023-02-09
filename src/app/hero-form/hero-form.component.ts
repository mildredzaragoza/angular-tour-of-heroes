import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService) { }
  powers = ['Really Smart', 'Super Flexible', 'Super Fast', 'Weather Changer'];
  model = new Hero(21, 'Superman', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  onSubmit(){ this.submitted = true; }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  newHero() {
    this.model = new Hero(21, '', '');
  }

}


