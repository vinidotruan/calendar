import { Component } from '@angular/core';
import * as calendar from '../assets/jsons/calendar.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'calendar';
  viewDate: Date = new Date();

  constructor() {}
}
