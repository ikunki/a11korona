import { Component, OnInit } from '@angular/core';
import { ICovidSummary } from '../../interfaces/icovidsummary';
import { CovidApiService } from '../../services/covid-api.service';

@Component({
  selector: 'app-new-deaths',
  template: `<div>
  <p>Count: {{ summary.Global.NewDeaths }}</p>
  </div>`,
  styleUrls: ['./new-deaths.component.css']
})
export class NewDeathsComponent implements OnInit {
  summary!: ICovidSummary;

  constructor(private covidApiSrv: CovidApiService) {    
  }

  async ngOnInit() {
    await this.covidApiSrv.refreshData();
    this.covidApiSrv.varSummary.subscribe((data) => (this.summary = data));
  }
}
