import { Component, OnInit } from '@angular/core';
import { CovidApiService } from '../../services/covid-api.service';
import { ICovidSummary, ICountryData, ITotalMinDeaths } from '../../interfaces/icovidsummary';

class TotalMinDeaths implements ITotalMinDeaths {
  Country: string;
  CountryCode: string;
  Date: string;
  Slug: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;

  getTotalMinDeaths(summary: ICovidSummary): ICountryData {
    let data: ICountryData = this.getFirstCountryData(summary);
    for (let item of summary.Countries) {
      if (item.TotalDeaths < data.TotalDeaths)
        data = item;
    }
    console.log('getTotalMinDeaths', data);
    return data;
  }

  private getFirstCountryData(summary: ICovidSummary): ICountryData {
    console.log('getFirstCountryData', summary.Countries[0]);
    let data: ICountryData = {
      Country: summary.Countries[0].Country,
      CountryCode: summary.Countries[0].CountryCode,
      Date: summary.Countries[0].Date,
      Slug: summary.Countries[0].Slug,
      NewConfirmed: summary.Countries[0].NewConfirmed,
      NewDeaths: summary.Countries[0].NewDeaths,
      NewRecovered: summary.Countries[0].NewRecovered,
      TotalConfirmed: summary.Countries[0].TotalConfirmed,
      TotalDeaths: summary.Countries[0].TotalDeaths,
      TotalRecovered: summary.Countries[0].TotalRecovered
    };
    return data;
  }

  constructor(Country: string = '', CountryCode: string = '', Date: string = '', Slug: string = '',
    NewConfirmed: number = 0, NewDeaths: number = 0, NewRecovered: number = 0,
    TotalConfirmed: number = 0, TotalDeaths: number = 0, TotalRecovered: number = 0) { 
    this.Country = Country;
    this.CountryCode = CountryCode;
    this.Date = Date;
    this.Slug = Slug;
    this.NewConfirmed = NewConfirmed;
    this.NewDeaths = NewDeaths;
    this.NewRecovered = NewRecovered;
    this.TotalConfirmed = TotalConfirmed;
    this.TotalDeaths = TotalDeaths;
    this.TotalRecovered = TotalRecovered;
    }
}

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
  item!: ICovidSummary;
  countryData!: ICountryData;
  totalMinDeaths!: TotalMinDeaths;

  constructor(private covidApiSrv: CovidApiService) {
    this.totalMinDeaths = new TotalMinDeaths();
  }

  async ngOnInit() {
    this.covidApiSrv.refreshData();
    this.covidApiSrv.varSummary.subscribe((data) => (this.item = data));
    this.countryData = this.totalMinDeaths.getTotalMinDeaths(this.item);
  }
}
