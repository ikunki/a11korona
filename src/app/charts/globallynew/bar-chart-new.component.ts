import { Component, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { IGlobal } from '../../interfaces/icovidsummary';

@Component({
  selector: 'app-bar-chart-new',
  templateUrl: './bar-chart-new.component.html',
  styleUrls: ['./bar-chart-new.component.css']
})
export class BarChartNewComponent {
  @Input() summaryGlobal!: IGlobal;
  numbers!: number[];
  barChartOptions: ChartOptions = { responsive: true };
  barChartLabels: Label[] = ['Confirmed', 'Deaths', 'Recoverd'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData!: ChartDataSets[];

  constructor() {
    this.numbers[0] = this.summaryGlobal.NewConfirmed;
    this.numbers[1] = this.summaryGlobal.NewDeaths;
    this.numbers[2] = this.summaryGlobal.NewRecovered;
    this.barChartData = [
      { data: this.numbers, label: 'Globally New' }
    ];
  }
}
