import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { ICountryData } from '../interfaces/icovidsummary';
import { CovidApiService } from '../services/covid-api.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  countryData: ICountryData[] = [];
  country!: ICountryData;

  constructor(private apiService: CovidApiService, public dialogRef: MatDialogRef<CountryDetailsComponent>) {
  }

  async ngOnInit() {
    const countryData$ = this.apiService.getCountryData();
    this.countryData = await countryData$.toPromise();
    this.country = this.countryData.find(e => e.Country == this.dialogRef.id) as ICountryData;
    console.log(this.country);
  }

  close() {
    this.dialogRef.close();
  }
}
//this.getCountryData();
/* 
  public getCountryData = () => {
    this.apiService.getCountryData()
    .subscribe((res: ICountryData[]) => {
      this.countryData = res as ICountryData[];
    });
  }
*/
