import { Component } from '@angular/core';
import { SuperHeroService } from './services/super-hero.service';
import { SuperHero } from './models/super-hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'superHeroUI';

  heroes: SuperHero[] = [];
  heroToEdit?: SuperHero;

  constructor(
    private super_hero_service: SuperHeroService
  ) {}

  ngOnInit() {
    this.super_hero_service.getSuperHeroes().subscribe((res: SuperHero[]) => (this.heroes = res))
  }

  updateHeroList(heroes: SuperHero[]) {
    this.heroes = heroes;
  }

  initNewHero() {
    this.heroToEdit = new SuperHero();
  }

  editHero(hero: SuperHero) {
    this.heroToEdit = hero;
  }
}
