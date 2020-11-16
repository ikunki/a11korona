import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-recovered',
  template: `<div>
  <p>Count: {{ newRecovered }}</p>
  </div>`,
  styleUrls: ['./new-recovered.component.css']
})
export class NewRecoveredComponent {
  @Input() newRecovered!: number;

  constructor() {    
  }
}
