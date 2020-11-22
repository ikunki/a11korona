import 'cors';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ISummary } from '../interfaces/icovidsummary';
import { ICountry, ICountriesInfo } from '../interfaces/icountry';

export interface ICovidApiSrv {
  getSummary(): Observable<ISummary>;
  getCountries(): Observable<ICountry[]>;
  getCountriesInfo(pageSize: number, searchText: string, pagesToSkip: number): Observable<ICountriesInfo>;
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

  getSummary(): Observable<ISummary> {
    const apiUrl = `${environment.baseUrl}/summary`;
    const result = this.http.get<ISummary>(apiUrl, { headers: this.headers })
      .pipe(map((data => data)));
    return result;
  }

  getCountries(): Observable<ICountry[]> {
    const apiUrl = `${environment.baseUrl}/countries`;
    const result = this.http.get<ICountry[]>(apiUrl, { headers: this.headers })
      .pipe(map((data => data)));
    return result;
  }

  getCountriesInfo(pageSize: number, searchText = '', pagesToSkip = 0): Observable<ICountriesInfo> {
    let countriesInfo: ICountriesInfo = { Countries: [], Count: 0} ;
    const apiUrl = `${environment.baseUrl}/countries`;
    const result = this.http.get<ICountry[]>(apiUrl, { headers: this.headers,
      params: {
        search: searchText,
        offset: pagesToSkip.toString(),
        limit: pageSize.toString(),
      },
    })
    .pipe(map((data => {countriesInfo.Countries = data , countriesInfo.Count = data.length})));
    return of(countriesInfo);
  }

}
/*
private covidSummary = new BehaviorSubject<ISummary>({
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
