import { Component, OnInit } from '@angular/core';
import { ICovidSummary } from '../../interfaces/icovidsummary';
import { CovidApiService } from '../../services/covid-api.service';

@Component({
  selector: 'app-total-confirmed',
  template: `<div>
  <p>Count: {{ item.Global.TotalConfirmed }}</p>
  </div>`,
  styleUrls: ['./total-confirmed.component.css']
})
export class TotalConfirmedComponent implements OnInit {
  item!: ICovidSummary;

  constructor(private covidApiSrv: CovidApiService) {    
  }

  async ngOnInit() {
    this.covidApiSrv.refreshData();
    this.covidApiSrv.varSummary.subscribe((data) => (this.item = data));
  }
}
