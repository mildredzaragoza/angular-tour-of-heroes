import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('inOut', [
      state('hover', style({
        backgroundColor: 'black'
      })),
      state('none', style({
        backgroundColor: '#3f525c'
      })),
      transition('hover => none', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class DashboardComponent implements OnInit{
  heroes: Hero[] = [];
  constructor(private heroService: HeroService){}

  ngOnInit(): void{
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes.slice(1,5));
  }

  isHover = false;
  toggle(){
    this.isHover = !this.isHover;
  }
}
