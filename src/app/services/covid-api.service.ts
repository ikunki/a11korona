import 'cors';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICovidSummary } from '../interfaces/icovidsummary';

export interface ICovidApiSrv {
  refreshData(): void
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
  varSummary = this.covidSummary.asObservable()

  refreshData(): void {
    this.getSummary().subscribe(adat => this.covidSummary.next(adat));
  }

  getSummary(): Observable<ICovidSummary> {
    const apiUrl = `${environment.baseUrl}`;
    const result = this.http.get<ICovidSummary>(apiUrl, { headers: this.headers })
      .pipe(map((data =>  data)));
    return result;
  }
}
