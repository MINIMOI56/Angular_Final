import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeDePartieComponent } from './components/liste-de-partie/liste-de-partie.component';
import { PageFiltreComponent } from './components/page-filtre/page-filtre.component';
import { PageStatistiqueComponent } from './components/page-statistique/page-statistique.component';

const routes: Routes = [
  { path: 'filtre', component: PageFiltreComponent },
  { path: '', component: ListeDePartieComponent },
  { path: 'statistique', component: PageStatistiqueComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }