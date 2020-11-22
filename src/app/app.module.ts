import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
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
import { BarChartNewComponent } from './charts/globallynew/bar-chart-new.component';
import { BarChartTotalComponent } from './charts/globallytotal/bar-chart-total.component';
import { CountryListComponent } from './tables/country-list.component';

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
    BarChartNewComponent,
    BarChartTotalComponent,
    CountryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [CovidApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
