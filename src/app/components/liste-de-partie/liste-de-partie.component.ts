import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-liste-de-partie',
  templateUrl: './liste-de-partie.component.html',
  styleUrls: ['./liste-de-partie.component.css']
})
export class ListeDePartieComponent implements OnInit {

  constructor(private gamesService: GamesService) { }

  games: Game[] = [];

  getGames(): void {
    this.gamesService.getGames()
      .subscribe(games => this.games = games);
  }

  delete(game: Game): void {
    this.games = this.games.filter(g => g !== game);
    this.gamesService.deleteGame(game).subscribe();
  }

  ngOnInit(): void {
    this.getGames();
  }

}
