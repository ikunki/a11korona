import { Component, OnInit } from '@angular/core';
import { ICovidSummary } from '../../interfaces/icovidsummary';
import { CovidApiService } from '../../services/covid-api.service';

@Component({
  selector: 'app-new-confirmed',
  template: `<p>{{ item.Global.NewConfirmed }}</p>`,
  styleUrls: ['./new-confirmed.component.css']
})
export class NewConfirmedComponent implements OnInit {
  item!: ICovidSummary;

  constructor(private covidApiSrv: CovidApiService) {    
  }

  async ngOnInit() {
    this.covidApiSrv.refreshData();
    this.covidApiSrv.varSummary.subscribe((data) => (this.item = data))
  }
}
