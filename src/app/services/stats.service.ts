import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../models/game';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  gamesUrl: string = 'http://localhost:3000/games';

  constructor(private http: HttpClient) { }

  // GET le nombre de partie dans chaque mode de jeu
  getGamesByGamemode(): Observable<Game[]> {
    const url = `${this.gamesUrl}/gamemode`;
    return this.http.get<Game[]>(url);
  }

  // GET le nombre de partie dans chaque map
  getGamesByMap(): Observable<Game[]> {
    const url = `${this.gamesUrl}/map`;
    return this.http.get<Game[]>(url);
  }
}
