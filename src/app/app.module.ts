import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
//import { MatPaginator } from '@angular/material/paginator';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NewConfirmedComponent } from './cards/new-confirmed/new-confirmed.component';
import { TotalConfirmedComponent } from './cards/total-confirmed/total-confirmed.component';
import { TotalDeathsComponent } from './cards/total-deaths/total-deaths.component';
import { NewDeathsComponent } from './cards/new-deaths/new-deaths.component';
import { NewRecoveredComponent } from './cards/new-recovered/new-recovered.component';
import { TotalRecoveredComponent } from './cards/total-recovered/total-recovered.component';
import { CovidApiService } from './services/covid-api.service';
import { MinTotalConfirmedComponent } from './cards/min-total-confirmed/min-total-confirmed.component';
import { MaxTotalConfirmedComponent } from './cards/max-total-confirmed/max-total-confirmed.component';
import { MinTotalDeathsComponent } from './cards/min-total-deaths/min-total-deaths.component';
import { MaxTotalDeathsComponent } from './cards/max-total-deaths/max-total-deaths.component';
import { StatsAllCountriesComponent } from './current/stats-all-countries.component';

@NgModule({
  declarations: [
    AppComponent,
    NewConfirmedComponent,
    TotalConfirmedComponent,
    TotalDeathsComponent,
    NewDeathsComponent,
    NewRecoveredComponent,
    TotalRecoveredComponent,
    MinTotalConfirmedComponent,
    MaxTotalConfirmedComponent,
    MinTotalDeathsComponent,
    MaxTotalDeathsComponent,
    StatsAllCountriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSliderModule,
    MatToolbarModule,
    MatDividerModule,
    MatTableModule,
    //MatPaginator
  ],
  providers: [CovidApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
