import {AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { merge, of } from 'rxjs';
import { debounceTime, startWith, switchMap, map, catchError } from 'rxjs/operators';
import { CovidApiService } from '../services/covid-api.service';
import { ICountry, ICountriesInfo } from '../interfaces/icountry';

@Component({
  selector: 'app-stats-all-countries',
  templateUrl: './stats-all-countries.component.html',
  styleUrls: ['./stats-all-countries.component.css']
})
export class StatsAllCountriesComponent implements AfterViewInit {
  displayedColumns: string[] = ['Country', 'CountryCode', 'Date', 'Slug', 'NewConfirmed', 'NewDeaths', 'NewRecovered', 'TotalConfirmed', 'TotalDeaths', 'TotalRecovered'];
  //countries!: ICountryData[];
  dataSource = new MatTableDataSource();
  resultsLength = 0;
  _isLoadingResults = true;
  _hasError = false;
  errorText = '';
  _skipLoading = false;
  search = new FormControl('', OptionalTextValidation);
  @ViewChild(MatPaginator, null) paginator: MatPaginator; //-------------- , null
  @ViewChild(MatSort, null) sort: MatSort; //-------------- , null

  constructor(private covidApiSrv: CovidApiService) {}
  ngOnInit() {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0))
    if (this._skipLoading) {
      return
    }
    merge(
      this.sort.sortChange,
      this.paginator.page,
      this.search.valueChanges.pipe(debounceTime(1000))
    ).pipe(startWith({}),
      switchMap(() => {
        this._isLoadingResults = true,
        return this.covidApiSrv.getCountries(
          this.paginator.pageSize,
          this.search.value,
          this.paginator.pageIndex
        )
      }),
      map((data: { Countries: ICountry[]; Count: number;  }) => {
        this._isLoadingResults = false,
        this._hasError = false,
        this.resultsLength = data.Count,
        return data.Countries
      }),
      catchError((err) => {
        this._isLoadingResults = false
        this._hasError = true
        this.errorText = err
        return of([])
      })
    ).subscribe((data) => (this.dataSource.data = data))
  }
}
