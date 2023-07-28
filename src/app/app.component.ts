import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'calendar';
  viewDate: Date = new Date();

  constructor() {}

  public getDaysInMonth(month: number, year: number): number {
    return new Date(year, month, 0).getDate();
  }

  public montCalendar(
    month: number,
    year: number,
  ): { day: number; dayOfWeek: number }[] {
    const daysInMonth = this.getDaysInMonth(month, year);
    const firstDay = new Date(year, month - 1, 1).getDay();
    const calendar = [];
    for (let i = 1; i <= daysInMonth; i++) {
      calendar.push({ day: i, dayOfWeek: (i + firstDay - 1) % 7 });
    }
    return calendar;
  }

  protected readonly getCalendar = getCalendar;
}

function getCalendar(year: number): { [month: number]: CalendarEntry[] } {
  const calendar: { [month: number]: CalendarEntry[] } = {};

  for (let month = 0; month < 12; month++) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const entries: CalendarEntry[] = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dayOfWeek = date.getDay();

      entries.push({ day, dayOfWeek });
    }

    calendar[month + 1] = entries;
  }

  console.log(calendar);
  return calendar;
}

interface CalendarEntry {
  day: number;
  dayOfWeek: number;
}
