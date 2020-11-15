import { Component, OnInit } from '@angular/core';
import { ICovidSummary } from '../../interfaces/icovidsummary';
import { CovidApiService } from '../../services/covid-api.service';

@Component({
  selector: 'app-total-confirmed',
  template: `<div>
  <p>Count: {{ summary.Global.TotalConfirmed }}</p>
  </div>`,
  styleUrls: ['./total-confirmed.component.css']
})
export class TotalConfirmedComponent implements OnInit {
  summary!: ICovidSummary;

  constructor(private covidApiSrv: CovidApiService) {    
  }

  async ngOnInit() {
    const summary$ = this.covidApiSrv.getSummary();
    this.summary = await summary$.toPromise();
  }
}
