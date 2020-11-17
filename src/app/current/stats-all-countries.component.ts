import {AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
//import {MatPaginator} from '@angular/material/paginator';
import { ICountryData } from '../interfaces/icovidsummary';

@Component({
  selector: 'app-stats-all-countries',
  templateUrl: './stats-all-countries.component.html',
  styleUrls: ['./stats-all-countries.component.css']
})
export class StatsAllCountriesComponent implements AfterViewInit {
  displayedColumns: string[] = ['Country', 'CountryCode', 'Date', 'Slug', 'NewConfirmed', 'NewDeaths', 'NewRecovered', 'TotalConfirmed', 'TotalDeaths', 'TotalRecovered'];
  dataSource!: MatTableDataSource<ICountryData>;
  @Input() countries!: ICountryData[];

  //@ViewChild(MatPaginator)
  //paginator!: MatPaginator;

  constructor() {
  }

  ngAfterViewInit() {
    if (this.countries) {
      this.dataSource = new MatTableDataSource<ICountryData>(this.countries);
    }
    //this.dataSource.paginator = this.paginator;
  }
}
