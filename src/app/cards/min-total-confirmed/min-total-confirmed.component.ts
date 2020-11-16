import { Component, Input } from '@angular/core';
import { ICountryData } from '../../interfaces/icovidsummary';

@Component({
  selector: 'app-min-total-confirmed',
  template: `<div>
  <p>Country: {{ minTotalConfirmed.Country }}</p>
  <p>CountryCode: {{ minTotalConfirmed.CountryCode }}</p>
  <p>Date: {{ minTotalConfirmed.Date }}</p>
  <p>Slug: {{ minTotalConfirmed.Slug }}</p>
  <p>NewConfirmed: {{ minTotalConfirmed.NewConfirmed }}</p>
  <p>NewDeaths: {{ minTotalConfirmed.NewDeaths }}</p>
  <p>NewRecovered: {{ minTotalConfirmed.NewRecovered }}</p>
  <p>TotalConfirmed: {{ minTotalConfirmed.TotalConfirmed }}</p>
  <p>TotalDeaths: {{ minTotalConfirmed.TotalDeaths }}</p>
  <p>TotalRecovered: {{ minTotalConfirmed.TotalRecovered }}</p>
<div>`,
  styleUrls: ['./min-total-confirmed.component.css']
})
export class MinTotalConfirmedComponent{
  @Input() minTotalConfirmed!: ICountryData;

  constructor() {
  }
}
