import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';import { CovidApiService } from 'src/app/services/covid-api.service';
import { IGlobal } from '../../interfaces/icovidsummary';

@Component({
  selector: 'app-bar-chart-total',
  template: `
    <div class="chart-wrapper">
      <canvas baseChart 
        [datasets]="barChartData"
        [labels]="barChartLabels"
        [options]="barChartOptions"
        [plugins]="barChartPlugins"
        [legend]="barChartLegend"
        [chartType]="barChartType">
      </canvas>
    </div>
  `,
  styleUrls: ['./bar-chart-total.component.css']
})
export class BarChartTotalComponent implements OnInit {
  barChartData!: ChartDataSets[];
  globalInfo!: IGlobal;
  numbers: number[] = [];
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
    this.barChartData = [
      { data: this.numbers, label: 'Globally New' }
    ];
    console.log('barChartData ', this.barChartData);
  }

  async ngOnInit() {
    const globalInfo$ = this.covidApiSrv.getGlobalInfo();
    this.globalInfo = await globalInfo$.toPromise();
    await this.set3numbers();
    //console.log('globalInfo ', this.globalInfo);
    //console.log('numbers ', this.numbers);
  }
}
