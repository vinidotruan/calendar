import {Component} from '@angular/core';
import {GoalsService} from '@services/goals.service';
import {Goal} from '@interfaces/goal';
import {Observable} from 'rxjs';
import {RegisterService} from "@services/register.service";

@Component({
  selector: 'app-checkable',
  templateUrl: './checkable.component.html',
  styleUrls: ['./checkable.component.scss'],
})
export class CheckableComponent {
  goals$!: Observable<Goal[]>;
  selectedGoals: Goal[] = [];

  constructor(private goalsService: GoalsService, private registerService: RegisterService) {
    this.goals$ = this.goalsService.getGoals();
  }

  public toggleGoal(goal: Goal): void {
    if (this.isSelected(goal)) {
      this.selectedGoals = this.selectedGoals.filter((selectedGoal) => selectedGoal.slug !== goal.slug);
      return;
    }
    this.selectedGoals.push(goal);
  }

  public isSelected(goal: Goal): boolean {
    return this.selectedGoals.includes(goal);
  }

  public submit() {
    this.selectedGoals.map(goal => {
      this.registerService.createRegister(goal)
        .then(response => console.log(response))
        .catch(error => console.log(error));
    });
  }
}
