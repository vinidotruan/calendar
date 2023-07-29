import { Component } from '@angular/core';
import * as calendar from '../../../assets/jsons/calendar.json';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  year: number = 2023;
  month: number = 1;

  getCalendar(year: number, month: number): CalendarEntry[] {
    const firstDayOfMonth = new Date(year, month - 1, 1);
    const startingDayOfWeek = firstDayOfMonth.getDay();
    const daysInMonth = new Date(year, month, 0).getDate();

    const calendar: CalendarEntry[] = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month - 1, day);
      const dayOfWeek = date.getDay();

      calendar.push({ day, dayOfWeek });
    }

    // Add empty days to the beginning of the calendar to align the starting day
    for (let i = 0; i < startingDayOfWeek; i++) {
      calendar.unshift({ day: 0, dayOfWeek: i });
    }

    return calendar;
  }

  setYear(year: number) {
    this.year = year;
  }

  setMonth(month: number) {
    this.month = month;
  }
}

interface CalendarEntry {
  day: number;
  dayOfWeek: number;
}

interface Calendar {
  [month: number]: CalendarEntry[];
}
