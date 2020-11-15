import { Component, OnInit } from '@angular/core';
import { CovidApiService } from '../../services/covid-api.service';
import { ICovidSummary, ICountryData } from '../../interfaces/icovidsummary';
import { TotalMaxDeaths } from '../../interfaces/itotalmaxdeaths';

@Component({
  selector: 'app-max-total-deaths',
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
  styleUrls: ['./max-total-deaths.component.css']
})
export class MaxTotalDeathsComponent implements OnInit {
  countryData!: ICountryData;
  summary!: ICovidSummary;

  constructor(private covidApiSrv: CovidApiService) {
  }

  async ngOnInit() {
    const summary$$$ = this.covidApiSrv.getSummary();
    this.summary = await summary$$$.toPromise();
    const countries = this.summary.Countries;
    const totalMaxDeaths: TotalMaxDeaths = new TotalMaxDeaths();
    this.countryData = totalMaxDeaths.getTotalMaxDeaths(countries);
    console.log('TotalMaxDeaths-countryData ', this.countryData);
  }
}
