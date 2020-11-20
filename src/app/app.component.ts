import { Component, OnInit } from '@angular/core';
import { CovidApiService } from './services/covid-api.service';
import { ISummary, IGlobal, ICountryData } from './interfaces/icovidsummary';
import { TotalMaxConfirmed } from './interfaces/itotalmaxconfirmed';
import { TotalMaxDeaths } from './interfaces/itotalmaxdeaths';
import { TotalMinConfirmed } from './interfaces/itotalminconfirmed';
import { TotalMinDeaths } from './interfaces/itotalmindeaths';
import { CountriesInfo, ICountriesInfo } from './interfaces/icountry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  summary!: ISummary;
  summaryGlobal!: IGlobal;
  countriesList!: ICountriesInfo;
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
    this.summaryGlobal = this.summary.Global;
    const summaryCountries = this.summary.Countries;
    const totalMaxConfirmed: TotalMaxConfirmed = new TotalMaxConfirmed();
    this.maxTotalConfirmed = totalMaxConfirmed.getTotalMaxConfirmed(summaryCountries);
    const totalMaxDeaths: TotalMaxDeaths = new TotalMaxDeaths();
    this.maxTotalDeaths = totalMaxDeaths.getTotalMaxDeaths(summaryCountries);
    const totalMinConfirmed: TotalMinConfirmed = new TotalMinConfirmed();
    this.minTotalConfirmed = totalMinConfirmed.getTotalMinConfirmed(summaryCountries);
    const totalMinDeaths: TotalMinDeaths = new TotalMinDeaths();
    this.minTotalDeaths = totalMinDeaths.getTotalMinDeaths(summaryCountries);
    const countriesList$ = this.covidApiSrv.getCountries(100);
    this.countriesList = await countriesList$.toPromise();
    const countriesInfo: CountriesInfo = new CountriesInfo();
    const infoCount = countriesInfo.getCountInfo(this.countriesList);
    console.log('infoCount', infoCount);
    console.log(this.countriesList);
  }
}
