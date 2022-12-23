import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-liste-de-statistique-map',
  templateUrl: './liste-de-statistique-map.component.html',
  styleUrls: ['./liste-de-statistique-map.component.css']
})
export class ListeDeStatistiqueMapComponent implements OnInit {

  constructor(private statsService: StatsService) { }

  games: Game[] = [];

  getNumberOfGamesByMap(): void {
    this.statsService.getNumberOfGamesByMap()
      .subscribe(games => this.games = games);
  }

  ngOnInit(): void {
    this.getNumberOfGamesByMap();
  }
}
