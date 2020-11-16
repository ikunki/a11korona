import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-confirmed',
  template: `<div>
  <p>Count: {{ newConfirmed }}</p>
  </div>`,
  styleUrls: ['./new-confirmed.component.css']
})
export class NewConfirmedComponent {
  @Input() newConfirmed!: number;

  constructor() {    
  }
}
