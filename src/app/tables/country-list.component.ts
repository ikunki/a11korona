import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator'
import { CovidApiService } from '../services/covid-api.service';
import { ICountry } from '../interfaces/icountry';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit, AfterViewInit {
  public displayedColumns: string[] = ['country', 'iso2', 'slug', 'details'];
  public dataSource = new MatTableDataSource<ICountry>();
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  @ViewChild(MatPaginator, {static: false})
  paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
 
  constructor(private apiService: CovidApiService) { }
 
  ngOnInit() {
    this.allCountries();
  }
 
  public allCountries = () => {
    this.apiService.getCountries()
    .subscribe((res: ICountry[]) => {
      this.dataSource.data = res as ICountry[];
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  public customSort = (event: any) => {
    console.log(event);
  }

  public redirectToDetails = (id: string) => {
    // megjeleniteni egy felugro ablakkban !!!
  }
}
