import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Game } from 'src/app/models/game';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-formulaire-de-partie',
  templateUrl: './formulaire-de-partie.component.html',
  styleUrls: ['./formulaire-de-partie.component.css']
})
export class FormulaireDePartieComponent implements OnInit {

  game: Game = {
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

  onSubmit(): void {
    this.gamesService.addGame(this.game).subscribe();
  }

  ngOnInit(): void {
  }

}
