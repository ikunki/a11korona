import { Component, OnInit } from '@angular/core';
import { ICovidSummary } from '../../interfaces/icovidsummary';
import { CovidApiService } from '../../services/covid-api.service';

@Component({
  selector: 'app-total-deaths',
  template: `<div>
  <p>Count: {{ item.Global.TotalDeaths }}</p>
  </div>`,
  styleUrls: ['./total-deaths.component.css']
})
export class TotalDeathsComponent implements OnInit {
  item!: ICovidSummary;

  constructor(private covidApiSrv: CovidApiService) {    
  }

  async ngOnInit() {
    this.covidApiSrv.refreshData();
    this.covidApiSrv.varSummary.subscribe((data) => (this.item = data));
  }
}
