import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeDePartieComponent } from './components/liste-de-partie/liste-de-partie.component';
import { PageAjoutEtModifComponent } from './components/page-ajout-et-modif/page-ajout-et-modif.component';
import { PageFiltreComponent } from './components/page-filtre/page-filtre.component';
import { PageStatistiqueComponent } from './components/page-statistique/page-statistique.component';

const routes: Routes = [
  { path: 'filtre', component: PageFiltreComponent },
  { path: '', component: ListeDePartieComponent },
  { path: 'statistique', component: PageStatistiqueComponent},
  { path: 'formulaire', component: PageAjoutEtModifComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }