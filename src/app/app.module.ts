import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NewConfirmedComponent } from './cards/new-confirmed/new-confirmed.component';
import { TotalConfirmedComponent } from './cards/total-confirmed/total-confirmed.component';
import { TotalDeathsComponent } from './cards/total-deaths/total-deaths.component';
import { NewDeathsComponent } from './cards/new-deaths/new-deaths.component';
import { NewRecoveredComponent } from './cards/new-recovered/new-recovered.component';
import { TotalRecoveredComponent } from './cards/total-recovered/total-recovered.component';


@NgModule({
  declarations: [
    AppComponent,
    NewConfirmedComponent,
    TotalConfirmedComponent,
    TotalDeathsComponent,
    NewDeathsComponent,
    NewRecoveredComponent,
    TotalRecoveredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSliderModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
