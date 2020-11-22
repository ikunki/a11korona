import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CountryDetailsComponent>) {
  }

  ngOnInit(): void {
    console.log('country ', this.dialogRef.id);
  }

  close() {
    this.dialogRef.close();
  }
}
