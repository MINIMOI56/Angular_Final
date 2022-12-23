import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { Player } from 'src/app/models/player';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-liste-de-partie-map-gamemode',
  templateUrl: './liste-de-partie-map-gamemode.component.html',
  styleUrls: ['./liste-de-partie-map-gamemode.component.css']
})
export class ListeDePartieMapGamemodeComponent implements OnInit {

  constructor(private gamesService: GamesService) { }

  games: Game[] = [];

  gamemodes: string[] = ["FFA", "MME","SND"];

  chosenGamemode: string = "";

  maps: string[] = ["Raid", "Standoff","Slums"]

  chosenMap: string = "";

  getGames(): void {
    this.gamesService.getGames()
      .subscribe(games => this.games = games);
  }

  getGamesByMapAndGamemode(map: string, gamemode: string): void {
    this.gamesService.getGamesByMapAndGamemode(map, gamemode)
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
