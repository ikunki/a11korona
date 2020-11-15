import { Component, OnInit } from '@angular/core';
import { CovidApiService } from '../../services/covid-api.service';
import { ICovidSummary, ICountryData } from '../../interfaces/icovidsummary';
import { TotalMinConfirmed } from '../../interfaces/itotalminconfirmed';

@Component({
  selector: 'app-min-total-confirmed',
  template: `<div>
  <p>Country: {{ countryData.Country }}</p>
  <p>CountryCode: {{ countryData.CountryCode }}</p>
  <p>Date: {{ countryData.Date }}</p>
  <p>Slug: {{ countryData.Slug }}</p>
  <p>NewConfirmed: {{ countryData.NewConfirmed }}</p>
  <p>NewDeaths: {{ countryData.NewDeaths }}</p>
  <p>NewRecovered: {{ countryData.NewRecovered }}</p>
  <p>TotalConfirmed: {{ countryData.TotalConfirmed }}</p>
  <p>TotalDeaths: {{ countryData.TotalDeaths }}</p>
  <p>TotalRecovered: {{ countryData.TotalRecovered }}</p>
<div>`,
  styleUrls: ['./min-total-confirmed.component.css']
})
export class MinTotalConfirmedComponent implements OnInit {
  countryData!: ICountryData;
  summary!: ICovidSummary;

  constructor(private covidApiSrv: CovidApiService) {
  }

  async ngOnInit() {
    const summary$$$ = this.covidApiSrv.getSummary();
    this.summary = await summary$$$.toPromise();
    const countries = this.summary.Countries;
    const totalMinConfirmed: TotalMinConfirmed = new TotalMinConfirmed();
    this.countryData = totalMinConfirmed.getTotalMinConfirmed(countries);
    console.log('TotalMinConfirmed-countryData ', this.countryData);
  }
}
