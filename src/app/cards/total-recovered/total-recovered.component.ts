import { Component, OnInit } from '@angular/core';
import { ICovidSummary } from '../../interfaces/icovidsummary';
import { CovidApiService } from '../../services/covid-api.service';

@Component({
  selector: 'app-total-recovered',
  template: `<div>
  <p>Count: {{ item.Global.TotalRecovered }}</p>
  </div>`,
  styleUrls: ['./total-recovered.component.css']
})
export class TotalRecoveredComponent implements OnInit {
  item!: ICovidSummary;

  constructor(private covidApiSrv: CovidApiService) {    
  }

  async ngOnInit() {
    this.covidApiSrv.refreshData();
    this.covidApiSrv.varSummary.subscribe((data) => (this.item = data));
  }
}
