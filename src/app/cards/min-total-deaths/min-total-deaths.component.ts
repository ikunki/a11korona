import { Component, Input } from '@angular/core';
import { ICountryData } from '../../interfaces/icovidsummary';

@Component({
  selector: 'app-min-total-deaths',
  template: `<div>
  <p>Country: {{ minTotalDeaths.Country }}</p>
  <p>CountryCode: {{ minTotalDeaths.CountryCode }}</p>
  <p>Date: {{ minTotalDeaths.Date }}</p>
  <p>Slug: {{ minTotalDeaths.Slug }}</p>
  <p>NewConfirmed: {{ minTotalDeaths.NewConfirmed }}</p>
  <p>NewDeaths: {{ minTotalDeaths.NewDeaths }}</p>
  <p>NewRecovered: {{ minTotalDeaths.NewRecovered }}</p>
  <p>TotalConfirmed: {{ minTotalDeaths.TotalConfirmed }}</p>
  <p>TotalDeaths: {{ minTotalDeaths.TotalDeaths }}</p>
  <p>TotalRecovered: {{ minTotalDeaths.TotalRecovered }}</p>
<div>`,
  styleUrls: ['./min-total-deaths.component.css']
})
export class MinTotalDeathsComponent {
  @Input() minTotalDeaths!: ICountryData;

  constructor() {
  }
}
