import { Component, Input } from '@angular/core';
import { ICountryData } from '../../interfaces/icovidsummary';

@Component({
  selector: 'app-max-total-deaths',
  template: `<div>
  <p>Country: {{ maxTotalDeaths.Country }}</p>
  <p>CountryCode: {{ maxTotalDeaths.CountryCode }}</p>
  <p>Date: {{ maxTotalDeaths.Date }}</p>
  <p>Slug: {{ maxTotalDeaths.Slug }}</p>
  <p>NewConfirmed: {{ maxTotalDeaths.NewConfirmed }}</p>
  <p>NewDeaths: {{ maxTotalDeaths.NewDeaths }}</p>
  <p>NewRecovered: {{ maxTotalDeaths.NewRecovered }}</p>
  <p>TotalConfirmed: {{ maxTotalDeaths.TotalConfirmed }}</p>
  <p>TotalDeaths: {{ maxTotalDeaths.TotalDeaths }}</p>
  <p>TotalRecovered: {{ maxTotalDeaths.TotalRecovered }}</p>
<div>`,
  styleUrls: ['./max-total-deaths.component.css']
})
export class MaxTotalDeathsComponent {
  @Input() maxTotalDeaths!: ICountryData;

  constructor() {
  }
}
