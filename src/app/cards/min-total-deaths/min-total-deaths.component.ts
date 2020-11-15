import { Component, OnInit } from '@angular/core';
import { CovidApiService } from '../../services/covid-api.service';
import { ICovidSummary, ICountryData } from '../../interfaces/icovidsummary';
import { ITotalMinDeaths, TotalMinDeaths } from '../../interfaces/itotalmindeaths';

@Component({
  selector: 'app-min-total-deaths',
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
  styleUrls: ['./min-total-deaths.component.css']
})
export class MinTotalDeathsComponent implements OnInit {
  covidSummary!: ICovidSummary;
  countryData!: ICountryData;
  countryList!: ICountryData[];
  totalMinDeaths!: TotalMinDeaths;

  constructor(private covidApiSrv: CovidApiService) {
    this.totalMinDeaths = new TotalMinDeaths();
  }

  async ngOnInit() {
    await this.covidApiSrv.refreshData();
    await this.covidApiSrv.varSummary.subscribe(data => (this.covidSummary = data));
    await this.covidApiSrv.varCountries.subscribe(data => (this.countryList = data));
    this.countryData = this.totalMinDeaths.getTotalMinDeaths(this.countryList);
  }
}
