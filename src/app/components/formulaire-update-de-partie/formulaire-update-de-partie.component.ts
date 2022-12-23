import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-formulaire-update-de-partie',
  templateUrl: './formulaire-update-de-partie.component.html',
  styleUrls: ['./formulaire-update-de-partie.component.css']
})
export class FormulaireUpdateDePartieComponent implements OnInit {

  games: Game[] = [];

  idGame: string = '';

  updatedgame: Game = {
    name: '',
    description: '',
    number_of_round_played: 0,
    time_per_round_played: [],
    chosen_map: '',
    chosen_game_mode: '',
    is_day: false,
    elapsed_time: 0,
    players: [],
    joinable: false,
    started: false,
    count: ''
  }

  constructor(private gamesService: GamesService) { }

  getGame(): void {
    this.gamesService.getGame(this.idGame).subscribe(game => this.updatedgame = game);
  }

  getGames(): void {
    this.gamesService.getGames().subscribe(games => this.games = games);
  }

  updateGame(): void {
    this.gamesService.updateGame(this.updatedgame).subscribe(game => this.updatedgame = game);
  }

  onSubmit(): void {
    this.updateGame();
  }

  ngOnInit(): void {
    this.getGames();
  }

}
