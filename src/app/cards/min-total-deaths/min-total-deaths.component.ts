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

  getTotalMinDeaths(countries: ICountryData[]): ICountryData {
    console.log('list ', countries);
    let data: ICountryData = this.getFirstCountryData(countries);
    for (let item of countries) {
      if (item.TotalDeaths < data.TotalDeaths)
        data = item;
    }
    return data;
  }

  private getFirstCountryData(countries: ICountryData[]): ICountryData {
    console.log('1st ', countries[0]);
    let data: ICountryData = {
      Country: countries[0].Country,
      CountryCode: countries[0].CountryCode,
      Date: countries[0].Date,
      Slug: countries[0].Slug,
      NewConfirmed: countries[0].NewConfirmed,
      NewDeaths: countries[0].NewDeaths,
      NewRecovered: countries[0].NewRecovered,
      TotalConfirmed: countries[0].TotalConfirmed,
      TotalDeaths: countries[0].TotalDeaths,
      TotalRecovered: countries[0].TotalRecovered
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
  countryList!: ICountryData[];
  totalMinDeaths!: TotalMinDeaths;

  constructor(private covidApiSrv: CovidApiService) {
    this.totalMinDeaths = new TotalMinDeaths();
  }

  async ngOnInit() {
    this.covidApiSrv.refreshData();
    this.covidApiSrv.varSummary.subscribe((data) => (this.item = data));
    this.covidApiSrv.varCountries.subscribe((data) => (this.countryList = data));
    this.countryData = this.totalMinDeaths.getTotalMinDeaths(this.countryList);
  }
}
