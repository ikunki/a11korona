import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total-recovered',
  template: `<div>
  <p>Count: {{ totalRecovered }}</p>
  </div>`,
  styleUrls: ['./total-recovered.component.css']
})
export class TotalRecoveredComponent {
  @Input() totalRecovered!: number;

  constructor() {
  }
}
