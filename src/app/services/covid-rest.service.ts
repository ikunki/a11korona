import 'cors';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ICovidSummary } from '../interfaces/icovidsummary';

export interface IRestService {
  getSummary(): Observable<ICovidSummary>
}

@Injectable({
  providedIn: 'root'
})
export class CovidRestService implements IRestService {
  headers = new HttpHeaders();
  covidSummary!: ICovidSummary;

  constructor(private httpClient: HttpClient) {
    this.headers.append('Accept', 'application/json');
    this.headers.append('Access-Control-Allow-Headers', 'Origin, Accept, Authorization, X-Requested-With, Content-Type');
    this.headers.append('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, HEAD, OPTIONS');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }

  getSummary(): Observable<ICovidSummary> {
    const apiUrl = `${environment.baseUrl}`;
    return this.httpClient.get<ICovidSummary>(apiUrl, { headers: this.headers })
      .pipe(map((data) => (this.covidSummary = data)));
  }
}
