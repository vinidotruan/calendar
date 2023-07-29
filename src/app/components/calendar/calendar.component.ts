import { Component } from '@angular/core';
import * as calendar from '../../../assets/jsons/calendar.json';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  year: number = 2023;
  month: number = 7;
  calendar: CalendarEntry[] = [];

  constructor() {
    this.getCalendar(this.year, this.month);
  }

  getCalendar(year: number, month: number): void {
    const firstDayOfMonth = new Date(year, month - 1, 1);
    const startingDayOfWeek = firstDayOfMonth.getDay();
    const daysInMonth = new Date(year, month, 0).getDate();

    const calendar: CalendarEntry[] = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month - 1, day);
      const dayOfWeek = date.getDay();

      calendar.push({ day, dayOfWeek, selected: false });
    }

    // Add empty days to the beginning of the calendar to align the starting day
    for (let i = 0; i < startingDayOfWeek; i++) {
      calendar.unshift({ day: 0, dayOfWeek: i });
    }

    this.calendar = calendar;
  }

  setYear(year: number) {
    this.year = year;
    this.getCalendar(this.year, this.month);
  }

  setMonth(month: number) {
    this.month = month;
    this.getCalendar(this.year, this.month);
  }

  selectDay(day: number) {
    this.calendar.map((calendarDay) => {
      if (calendarDay.day === day) {
        calendarDay.selected = !calendarDay.selected;
      }
    });
  }
}

interface CalendarEntry {
  day: number;
  dayOfWeek: number;
  selected?: boolean;
}
