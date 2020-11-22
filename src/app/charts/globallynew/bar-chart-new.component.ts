import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';import { CovidApiService } from 'src/app/services/covid-api.service';
import { IGlobal } from '../../interfaces/icovidsummary';

@Component({
  selector: 'app-bar-chart-new',
  template: `
    <div class="chart-wrapper">
      <canvas baseChart 
      [datasets]="dsOfNew"
      [labels]="barChartLabels"
      [options]="barChartOptions"
      [plugins]="barChartPlugins"
      [legend]="barChartLegend"
      [chartType]="barChartType">
      </canvas>
    </div>
  `,
  styleUrls: ['./bar-chart-new.component.css']
})
export class BarChartNewComponent implements OnInit {
  dsOfNew: ChartDataSets[] = [];
  numbers: number[] = [];
  globalInfo!: IGlobal;
  barChartOptions: ChartOptions = { responsive: true };
  barChartLabels: Label[] = ['Confirmed', 'Deaths', 'Recoverd'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  constructor(private covidApiSrv: CovidApiService) { }

  async set3numbers() {
    this.numbers[0] = this.globalInfo.NewConfirmed;
    this.numbers[1] = this.globalInfo.NewDeaths;
    this.numbers[2] = this.globalInfo.NewRecovered;
    this.dsOfNew = [{ data: this.numbers, label: 'New Global Covid-19' }];
    //console.log('dsOfNew ', this.dsOfNew);
  }

  async ngOnInit() {
    const globalInfo$ = this.covidApiSrv.getGlobalInfo();
    this.globalInfo = await globalInfo$.toPromise();
    await this.set3numbers();
    //console.log('globalInfo ', this.globalInfo);
    //console.log('numbers ', this.numbers);
  }
}
