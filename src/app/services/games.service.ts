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
export class GamesService {
  gamesUrl: string = 'http://localhost:3000/games';

  constructor(private http: HttpClient) { }

  // Get de tout les parties
  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesUrl);
  }

  // Get d'une partie
  getGame(id: string): Observable<Game> {
    const url = `${this.gamesUrl}/${id}`;
    return this.http.get<Game>(url);
  }

  // GET de partie par la map et le mode de jeu
  getGamesByMapAndGamemode(map: string, gamemode: string): Observable<Game[]> {
    const url = `${this.gamesUrl}/map/${map}/${gamemode}`;
    return this.http.get<Game[]>(url);
  }

  // GET de partie entre un sertain elapsed_time min max
  getGamesByElapsedTime(min: number, max: number): Observable<Game[]> {
    const url = `${this.gamesUrl}/elapsed_time/${min}/${max}`;
    return this.http.get<Game[]>(url);
  }

  // Ajout d'une partie
  addGame(game: Game): Observable<Game> {
    return this.http.post<Game>(this.gamesUrl, game, httpOptions);
  }

  // Suppression d'une partie
  deleteGame(game: Game): Observable<Game> {
    const url = `${this.gamesUrl}/${game._id}`;
    return this.http.delete<Game>(url, httpOptions);
  }

  // Mise à jour d'une partie
  updateGame(game: Game): Observable<any> {
    const url = `${this.gamesUrl}/${game._id}`;
    return this.http.put(url, game, httpOptions);
  }
}
