import { Component, OnInit } from '@angular/core';
import { ICovidSummary } from '../../interfaces/icovidsummary';
import { CovidApiService } from '../../services/covid-api.service';

@Component({
  selector: 'app-new-recovered',
  template: `<div>
  <p>Count: {{ summary.Global.NewRecovered }}</p>
  </div>`,
  styleUrls: ['./new-recovered.component.css']
})
export class NewRecoveredComponent implements OnInit {
  summary!: ICovidSummary;

  constructor(private covidApiSrv: CovidApiService) {    
  }

  async ngOnInit() {
    const summary$ = this.covidApiSrv.getSummary();
    this.summary = await summary$.toPromise();
  }
}
