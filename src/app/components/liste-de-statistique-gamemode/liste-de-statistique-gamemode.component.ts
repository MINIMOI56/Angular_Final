import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-liste-de-statistique-gamemode',
  templateUrl: './liste-de-statistique-gamemode.component.html',
  styleUrls: ['./liste-de-statistique-gamemode.component.css']
})
export class ListeDeStatistiqueGamemodeComponent implements OnInit {

  constructor(private statsService: StatsService) { }

  games: Game[] = [];

  getNumberOfGamesByGamemode(): void {
    this.statsService.getNumberOfGamesByGamemode()
      .subscribe(games => this.games = games);
  }

  ngOnInit(): void {
    this.getNumberOfGamesByGamemode();
  }

}
