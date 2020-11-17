import { Component, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { IGlobal } from '../../interfaces/icovidsummary';

@Component({
  selector: 'app-bar-chart-total',
  templateUrl: './bar-chart-total.component.html',
  styleUrls: ['./bar-chart-total.component.css']
})
export class BarChartTotalComponent {
  @Input() summaryGlobal!: IGlobal;
  numbers!: number[];
  barChartOptions: ChartOptions = { responsive: true };
  barChartLabels: Label[] = ['Confirmed', 'Deaths', 'Recoverd'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData!: ChartDataSets[];

  constructor() {
    this.numbers[0] = this.summaryGlobal.TotalConfirmed;
    this.numbers[1] = this.summaryGlobal.TotalDeaths;
    this.numbers[2] = this.summaryGlobal.TotalRecovered;
    this.barChartData = [
      { data: this.numbers, label: 'Globally Total' }
    ];
  }
}
