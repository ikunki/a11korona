import { Component, OnInit } from '@angular/core';
import { ICovidSummary } from '../../interfaces/icovidsummary';
import { CovidApiService } from '../../services/covid-api.service';

@Component({
  selector: 'app-new-confirmed',
  template: `<div>
  <p>Count: {{ summary.Global.NewConfirmed }}</p>
  </div>`,
  styleUrls: ['./new-confirmed.component.css']
})
export class NewConfirmedComponent implements OnInit {
  summary!: ICovidSummary;

  constructor(private covidApiSrv: CovidApiService) {    
  }

  async ngOnInit() {
    await this.covidApiSrv.refreshData();
    this.covidApiSrv.varSummary.subscribe(data => (this.summary = data));
  }
}
