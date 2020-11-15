import { Component, OnInit } from '@angular/core';
import { ICovidSummary } from '../../interfaces/icovidsummary';
import { CovidApiService } from '../../services/covid-api.service';

@Component({
  selector: 'app-new-recovered',
  template: `<div>
  <p>Count: {{ item.Global.NewRecovered }}</p>
  </div>`,
  styleUrls: ['./new-recovered.component.css']
})
export class NewRecoveredComponent implements OnInit {
  item!: ICovidSummary;

  constructor(private covidApiSrv: CovidApiService) {    
  }

  async ngOnInit() {
    this.covidApiSrv.refreshData();
    this.covidApiSrv.varSummary.subscribe((data) => (this.item = data));
  }
}
