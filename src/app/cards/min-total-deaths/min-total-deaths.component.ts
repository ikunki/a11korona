import { Component, OnInit } from '@angular/core';
import { CovidApiService } from '../../services/covid-api.service';
import { ICovidSummary, ICountryData } from '../../interfaces/icovidsummary';
import {  TotalMinDeaths } from '../../interfaces/itotalmindeaths';

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
  countryData!: ICountryData;
  summary!: ICovidSummary;


  constructor(private covidApiSrv: CovidApiService) {
  }

  async ngOnInit() {
    const summary$$$ = this.covidApiSrv.getSummary();
    this.summary = await summary$$$.toPromise();
    const countries = this.summary.Countries;
    const totalMinDeaths: TotalMinDeaths = new TotalMinDeaths();
    this.countryData = totalMinDeaths.getTotalMinDeaths(countries);
    console.log('TotalMinDeaths-countryData ', this.countryData);
  }
}
