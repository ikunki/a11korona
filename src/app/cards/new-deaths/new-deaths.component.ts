import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-deaths',
  template: `<div>
  <p>Count: {{ newDeaths }}</p>
  </div>`,
  styleUrls: ['./new-deaths.component.css']
})
export class NewDeathsComponent {
  @Input() newDeaths!: number;

  constructor() {    
  }
}
