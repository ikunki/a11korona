import { Component, OnInit } from '@angular/core';
import { CovidApiService } from '../../services/covid-api.service';
import { ICovidSummary, ICountryData } from '../../interfaces/icovidsummary';
import { ITotalMaxDeaths, TotalMaxDeaths } from '../../interfaces/itotalmaxdeaths';

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
  summary!: ICovidSummary;
  countryData!: ICountryData;
  countryList!: ICountryData[];
  totalMaxDeaths!: TotalMaxDeaths;

  constructor(private covidApiSrv: CovidApiService) {
    this.totalMaxDeaths = new TotalMaxDeaths();
  }

  async ngOnInit() {
    await this.covidApiSrv.refreshData();
    await this.covidApiSrv.varSummary.subscribe(data => (this.summary = data));
    await this.covidApiSrv.varCountries.subscribe(data => (this.countryList = data));
    this.countryData = this.totalMaxDeaths.getTotalMaxDeaths(this.countryList);
  }
}
