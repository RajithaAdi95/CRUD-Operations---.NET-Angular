import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const base_url = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
  private url = "SuperHero";
  
  constructor(
    private http: HttpClient
  ) { }

  public getSuperHeroes(): Observable<SuperHero[]> {
    return this.http.get<SuperHero[]>(`${base_url}/${this.url}`);
  }

  public updateSuperHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.put<SuperHero[]>(`${base_url}/${this.url}`, hero);
  }

  public createSuperHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.post<SuperHero[]>(`${base_url}/${this.url}`, hero);
  }

  public deleteSuperHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.delete<SuperHero[]>(`${base_url}/${this.url}/${hero.id}`);
  }
}
