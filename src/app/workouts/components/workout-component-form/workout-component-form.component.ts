import { Component, Input, OnInit } from '@angular/core';
import { ExerciseInterface, WorkoutComponentInterface } from '../../interfaces';
import { WorkoutComponent } from '../../classes/WorkoutComponent';
import { DistanceUnit, WeightUnit } from '../../enums';

@Component({
  selector: 'app-workout-component-form',
  templateUrl: './workout-component-form.component.html',
  styleUrls: ['./workout-component-form.component.scss'],
})
export class WorkoutComponentFormComponent implements OnInit {
  @Input() component: WorkoutComponentInterface;
  weightUnits: object = WeightUnit;
  distanceUnits: object = DistanceUnit;
  exercises: Array<ExerciseInterface>;

  constructor() {
    if (!this.component) {
      this.component = new WorkoutComponent();
    }
  }

  ngOnInit(): void {}
}
