import { Component, OnInit } from '@angular/core';
import { ICovidSummary } from '../../interfaces/icovidsummary';
import { CovidApiService } from '../../services/covid-api.service';

@Component({
  selector: 'app-total-deaths',
  template: `<div>
  <p>Count: {{ summary.Global.TotalDeaths }}</p>
  </div>`,
  styleUrls: ['./total-deaths.component.css']
})
export class TotalDeathsComponent implements OnInit {
  summary!: ICovidSummary;

  constructor(private covidApiSrv: CovidApiService) {    
  }

  async ngOnInit() {
    const summary$ = this.covidApiSrv.getSummary();
    this.summary = await summary$.toPromise();
  }
}
