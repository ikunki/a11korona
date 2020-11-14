import { Component } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CovidRestService } from './services/covid-rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Covid stats';
  atDate = Date.toString;

  constructor() {
    const handler = HttpHandler();
    const httpClient = new HttpClient(handler);
    const covidRestService = new CovidRestService(httpClient);
    covidRestService.getSummary();
  }
}
