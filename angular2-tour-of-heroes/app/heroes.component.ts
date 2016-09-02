/**
 * Created by david on 31/08/16.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Hero } from './hero.ts'
import { HeroService } from './hero.service';


@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls:  ['app/heroes.component.css']
})
export class HeroesComponent implements OnInit {
    title = 'Tour of Heroes';
    selectedHero: Hero;
    heroes: Hero[];

    constructor(
        private router: Router,
        private heroService: HeroService) { }


    ngOnInit(): void {
        this.getHeroes()
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

}

