import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total-deaths',
  template: `<div>
  <p>Count: {{ totalDeaths }}</p>
  </div>`,
  styleUrls: ['./total-deaths.component.css']
})
export class TotalDeathsComponent {
  @Input() totalDeaths!: number;

  constructor() {    
  }
}
