import 'cors';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICovidSummary, ICountryData } from '../interfaces/icovidsummary';

export interface ICovidApiSrv {
  refreshData(): Promise<void>;
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
  })
  varSummary = this.covidSummary.asObservable();

  private countryList = new BehaviorSubject<ICountryData[]>([]);
  varCountries = this.countryList.asObservable();

  async refreshData(): Promise<void> {
    (await this.getSummary()).subscribe(data => this.covidSummary.next(data));
    (await this.getCountries()).subscribe(data => this.countryList.next(data));
    console.log('varCountries ', this.varCountries);
  }

  async getSummary(): Promise<Observable<ICovidSummary>> {
    const apiUrl = `${environment.baseUrl}`;
    const result = this.http.get<ICovidSummary>(apiUrl, { headers: this.headers })
      .pipe(map((data => data)));
    return result;
  }

  async getCountries(): Promise<Observable<ICountryData[]>> {
    const result = await this.varSummary.pipe(map((data => data.Countries)));
    return result;
  }
}
