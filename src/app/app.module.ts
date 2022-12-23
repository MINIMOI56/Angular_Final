import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnteteComponent } from './components/entete/entete.component';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider'; 
import { HttpClientModule } from '@angular/common/http';
import { PiedDePageComponent } from './components/pied-de-page/pied-de-page.component';
import { MatToolbarModule}  from '@angular/material/toolbar';
import { ListeDePartieComponent } from './components/liste-de-partie/liste-de-partie.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button'; 
import {MatExpansionModule} from '@angular/material/expansion';
import { ListeDePartieMapGamemodeComponent } from './components/liste-de-partie-map-gamemode/liste-de-partie-map-gamemode.component';
import { ListeDePartieParTempsComponent } from './components/liste-de-partie-par-temps/liste-de-partie-par-temps.component';
import { PageFiltreComponent } from './components/page-filtre/page-filtre.component';
import { PageStatistiqueComponent } from './components/page-statistique/page-statistique.component';
import { ListeDeStatistiqueGamemodeComponent } from './components/liste-de-statistique-gamemode/liste-de-statistique-gamemode.component';
import { ListeDeStatistiqueMapComponent } from './components/liste-de-statistique-map/liste-de-statistique-map.component';


@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    PiedDePageComponent,
    ListeDePartieComponent,
    ListeDePartieMapGamemodeComponent,
    ListeDePartieParTempsComponent,
    PageFiltreComponent,
    PageStatistiqueComponent,
    ListeDeStatistiqueGamemodeComponent,
    ListeDeStatistiqueMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatDividerModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
