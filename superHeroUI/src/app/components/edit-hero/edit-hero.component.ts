import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuperHero } from 'src/app/models/super-hero';
import { SuperHeroService } from 'src/app/services/super-hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {
  @Input() hero?: SuperHero;
  @Output() heroesUpdated = new EventEmitter<SuperHero[]>();

  constructor(
    private super_hero_service: SuperHeroService
  ) { }

  ngOnInit(): void {
  }

  updateHero(hero: SuperHero) {
    this.super_hero_service.updateSuperHero(hero).subscribe((heroes: SuperHero[]) => 
      this.heroesUpdated.emit(heroes)
    );
  }

  deleteHero(hero: SuperHero) {
    this.super_hero_service.deleteSuperHero(hero).subscribe((heroes: SuperHero[]) => 
      this.heroesUpdated.emit(heroes)
    );
  }

  createHero(hero: SuperHero) {
    this.super_hero_service.createSuperHero(hero).subscribe((heroes: SuperHero[]) => 
      this.heroesUpdated.emit(heroes)
    );
  }
}
