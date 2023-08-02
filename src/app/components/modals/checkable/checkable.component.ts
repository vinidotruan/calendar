import { Component } from '@angular/core';
import { GoalsService } from '../../../services/goals.service';

@Component({
  selector: 'app-checkable',
  templateUrl: './checkable.component.html',
  styleUrls: ['./checkable.component.scss'],
})
export class CheckableComponent {
  goals$!: any;

  constructor(private goalsService: GoalsService) {
    this.goals$ = this.goalsService.getGoals();
  }
}
