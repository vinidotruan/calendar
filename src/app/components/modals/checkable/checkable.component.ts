import { Component, EventEmitter } from '@angular/core';
import { GoalsService } from '@services/goals.service';
import { Goal } from '@interfaces/goal';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-checkable',
  templateUrl: './checkable.component.html',
  styleUrls: ['./checkable.component.scss'],
})
export class CheckableComponent {
  goals$!: Observable<Goal[]>;

  selectedGoal: EventEmitter<Goal> = new EventEmitter<Goal>();

  constructor(private goalsService: GoalsService) {
    this.goals$ = this.goalsService.getGoals();
  }

  public selectGoal(goal: Goal): void {
    this.selectedGoal.emit(goal);
  }
}
