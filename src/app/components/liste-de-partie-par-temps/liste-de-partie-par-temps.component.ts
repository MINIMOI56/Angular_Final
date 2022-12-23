import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-liste-de-partie-par-temps',
  templateUrl: './liste-de-partie-par-temps.component.html',
  styleUrls: ['./liste-de-partie-par-temps.component.css']
})
export class ListeDePartieParTempsComponent implements OnInit {

  constructor(private gamesService: GamesService) { }

  games: Game[] = [];

  tempsMax: number = 0;
  tempsMin: number = 0;

  getGames(): void {
    this.gamesService.getGames()
      .subscribe(games => this.games = games);
  }

  getGamesByElapsedTime(min: number, max: number): void {
    this.gamesService.getGamesByElapsedTime(min, max)
      .subscribe(games => this.games = games);
  }

  ngOnInit(): void {
    this.getGames();
  }
}
