import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total-confirmed',
  template: `<div>
  <p>Count: {{ totalConfirmed }}</p>
  </div>`,
  styleUrls: ['./total-confirmed.component.css']
})
export class TotalConfirmedComponent {
  @Input() totalConfirmed!: number;

  constructor() {    
  }
}
