import { Component, Input } from '@angular/core';
import { ICountryData } from '../../interfaces/icovidsummary';

@Component({
  selector: 'app-max-total-confirmed',
  template: `<div>
  <p>Country: {{ maxTotalConfirmed.Country }}</p>
  <p>CountryCode: {{ maxTotalConfirmed.CountryCode }}</p>
  <p>Date: {{ maxTotalConfirmed.Date }}</p>
  <p>Slug: {{ maxTotalConfirmed.Slug }}</p>
  <p>NewConfirmed: {{ maxTotalConfirmed.NewConfirmed }}</p>
  <p>NewDeaths: {{ maxTotalConfirmed.NewDeaths }}</p>
  <p>NewRecovered: {{ maxTotalConfirmed.NewRecovered }}</p>
  <p>TotalConfirmed: {{ maxTotalConfirmed.TotalConfirmed }}</p>
  <p>TotalDeaths: {{ maxTotalConfirmed.TotalDeaths }}</p>
  <p>TotalRecovered: {{ maxTotalConfirmed.TotalRecovered }}</p>
<div>`,
  styleUrls: ['./max-total-confirmed.component.css']
})
export class MaxTotalConfirmedComponent {
  @Input() maxTotalConfirmed!: ICountryData;

  constructor() {
  }
}
