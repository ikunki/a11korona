import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';import { CovidApiService } from 'src/app/services/covid-api.service';
import { IGlobal } from '../../interfaces/icovidsummary';

@Component({
  selector: 'app-bar-chart-total',
  template: `
    <div class="chart-wrapper">
      <canvas baseChart 
        [datasets]="dsOfTotal"
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
  dsOfTotal: ChartDataSets[] = [];
  numbers: number[] = [];
  globalInfo!: IGlobal;
  barChartOptions: ChartOptions = { responsive: true };
  barChartLabels: Label[] = ['Confirmed', 'Deaths', 'Recoverd'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  constructor(private covidApiSrv: CovidApiService) { }

  async set3numbers() {
    this.numbers[0] = this.globalInfo.TotalConfirmed;
    this.numbers[1] = this.globalInfo.TotalDeaths;
    this.numbers[2] = this.globalInfo.TotalRecovered;
    this.dsOfTotal = [{ data: this.numbers, label: 'Total Global Covid-19' }];
    //console.log('dsOfTotal ', this.dsOfTotal);
  }

  async ngOnInit() {
    const globalInfo$ = this.covidApiSrv.getGlobalInfo();
    this.globalInfo = await globalInfo$.toPromise();
    await this.set3numbers();
    //console.log('globalInfo ', this.globalInfo);
    //console.log('numbers ', this.numbers);
  }
}
