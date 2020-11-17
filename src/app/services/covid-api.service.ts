import 'cors';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICovidSummary, ICountryData } from '../interfaces/icovidsummary';

export interface ICountries {
  items: ICountryData[]
  total: number
}

export interface ICovidApiSrv {
  getSummary(): Observable<ICovidSummary>;
  getCountries(pageSize: number, searchText: string, pagesToSkip: number): Observable<ICountries>;
}

@Injectable({
  providedIn: 'root'
})
export class CovidApiService  implements ICovidApiSrv {
  headers = new HttpHeaders();
  
  constructor(public http: HttpClient) {
    this.headers.append('Accept', 'application/json');
    this.headers.append('Access-Control-Allow-Headers', 'Origin, Accept, Authorization, X-Requested-With, Content-Type');
    this.headers.append('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, HEAD, OPTIONS');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }

  getSummary(): Observable<ICovidSummary> {
    const apiUrl = `${environment.baseUrl}`;
    const result = this.http.get<ICovidSummary>(apiUrl, { headers: this.headers })
      .pipe(map((data => data)));
    return result;
  }

  getCountries(pageSize: number, searchText: string, pagesToSkip: number): Observable<ICountries> {
    const apiUrl = `${environment.baseUrl}`;
    const result = this.http.get<ICovidSummary>(apiUrl, { headers: this.headers,
      params: {
        search: searchText,
        offset: pagesToSkip.toString(),
        limit: pageSize.toString(),
      },
    })
      .pipe(map((data => { data.Countries, 0 })));
    return result;
  }
}
/*
  private covidSummary = new BehaviorSubject<ICovidSummary>({
    Message: '',
    Global: {
      NewConfirmed: 0,
      NewDeaths: 0,
      NewRecovered: 0,
      TotalConfirmed: 0,
      TotalDeaths: 0,
      TotalRecovered: 0
      },
    Countries: []
  });

  private barChart = new BehaviorSubject<IBarChart>({
    letter: '',
    frequency: 0
  });
*/
