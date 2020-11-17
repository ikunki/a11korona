import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
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
  displayedColumns: string[] = ['Country', 'ISO2', 'Slug'];
  dataSource = new MatTableDataSource<ICountry>();
  resultsLength = 0;
  _isLoadingResults = true;
  _skipLoading = false;
  _hasError = false;
  errorText = '';
  search = new FormControl('', null);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private covidApiSrv: CovidApiService) {
    this.sort = new MatSort();
  }

  ngOnInit() {
    merge(this.sort.sortChange, this.paginator.page,
      this.search.valueChanges.pipe(debounceTime(1000))
    ).pipe(startWith({}),
    switchMap(async () => {
        this._isLoadingResults = true;
        const info$ = this.covidApiSrv.getCountries(
          this.paginator.pageSize,
          this.search.value,
          this.paginator.pageIndex
        );
        const info = await info$.toPromise();
        console.log('Info: ', info);
        return info;
      }),
      map((data: ICountriesInfo) => {
        console.log('CountriesInfo: ', data);
        this._isLoadingResults = false;
        this._hasError = false;
        this.resultsLength = data.Count;
        return data.Countries;
      }),
      catchError((err) => {
        this._isLoadingResults = false;
        this._hasError = true;
        this.errorText = err;
        return of([]);
      })
    ).subscribe((data) => (this.dataSource.data = data));
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
    if (this._skipLoading) {
      return;
    }
  }
}
//{ Countries: ICountry[]; Count: number }
