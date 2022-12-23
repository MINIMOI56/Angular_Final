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


@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    PiedDePageComponent,
    ListeDePartieComponent,
    ListeDePartieMapGamemodeComponent
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
