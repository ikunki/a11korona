import { Component, OnInit } from '@angular/core';
import { CovidApiService } from './services/covid-api.service';
import { ICovidSummary, ICountryData } from './interfaces/icovidsummary';
import { TotalMaxConfirmed } from './interfaces/itotalmaxconfirmed';
import { TotalMaxDeaths } from './interfaces/itotalmaxdeaths';
import { TotalMinConfirmed } from './interfaces/itotalminconfirmed';
import { TotalMinDeaths } from './interfaces/itotalmindeaths';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  summary!: ICovidSummary;
  countries!: ICountryData[];
  maxTotalConfirmed!: ICountryData;
  maxTotalDeaths!: ICountryData;
  minTotalConfirmed!: ICountryData;
  minTotalDeaths!: ICountryData;
  title = 'Covid stats';
  dateStr = '';

  constructor(private covidApiSrv: CovidApiService) {
    let date_ob = new Date();
    let day = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    this.dateStr = day + "/" + month + "/" + year;
  }

  async ngOnInit() {
    const summary$ = this.covidApiSrv.getSummary();
    this.summary = await summary$.toPromise();
    const countries = this.summary.Countries;
    const totalMaxConfirmed: TotalMaxConfirmed = new TotalMaxConfirmed();
    this.maxTotalConfirmed = totalMaxConfirmed.getTotalMaxConfirmed(countries);
    const totalMaxDeaths: TotalMaxDeaths = new TotalMaxDeaths();
    this.maxTotalDeaths = totalMaxDeaths.getTotalMaxDeaths(countries);
    const totalMinConfirmed: TotalMinConfirmed = new TotalMinConfirmed();
    this.minTotalConfirmed = totalMinConfirmed.getTotalMinConfirmed(countries);
    const totalMinDeaths: TotalMinDeaths = new TotalMinDeaths();
    this.minTotalDeaths = totalMinDeaths.getTotalMinDeaths(countries);
  }
}
