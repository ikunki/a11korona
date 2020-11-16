import * as d3 from 'd3';
import { Component, OnInit, ElementRef, Input, OnChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { ICovidSummary } from '../../interfaces/icovidsummary';
import { CovidApiService } from '../../services/covid-api.service';
import { IBarChart } from '../../interfaces/ibarchart';

@Component({
  selector: 'app-bar-chart',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, OnChanges {
  summary!: ICovidSummary;
  @Input()
  barData: IBarChart[];
  @ViewChild('chart')
  private chartContainer!: ElementRef;
  margin = {top: 20, right: 20, bottom: 30, left: 40};

  constructor(private covidApiSrv: CovidApiService) {    
    this.barData = [];
  }

  async ngOnInit() {
    const summary$ = this.covidApiSrv.getSummary();
    this.summary = await summary$.toPromise();
    const barData$ = this.covidApiSrv.getBarData();
    this.barData = await barData$.toPromise();
  }
  
  ngOnChanges(): void {
    if (!this.barData) { return; }
    this.createChart();
  }

  private createChart(): void {
    d3.select('svg').remove();
    const element = this.chartContainer.nativeElement;
    const barData = this.barData;
    const svg = d3.select(element).append('svg')
        .attr('width', element.offsetWidth)
        .attr('height', element.offsetHeight);
    const contentWidth = element.offsetWidth - this.margin.left - this.margin.right;
    const contentHeight = element.offsetHeight - this.margin.top - this.margin.bottom;

    const x = d3.scaleBand()
      .rangeRound([0, contentWidth])
      .padding(0.1)
      .domain(barData.map(d => d.letter));

    const y = d3.scaleLinear()
      .rangeRound([contentHeight, 0])
      .domain([0, d3.max(barData, d => +d.frequency)]);

    let dataViz = svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    dataViz.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + contentHeight + ')')
      .call(d3.axisBottom(x));

    dataViz.append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(y).ticks(10, '%'))
      .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('text-anchor', 'end')
        .text('Frequency');

    dataViz.selectAll('.bar')
      .data(barData)
      .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', d => x(d.letter))
        .attr('y', d => y(d.frequency))
        .attr('width', x.bandwidth())
        .attr('height', d => contentHeight - y(d.frequency));
  }
}
