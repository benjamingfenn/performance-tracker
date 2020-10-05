import { Component, OnInit, Input } from '@angular/core';
import { WorkoutInterface } from '../../interfaces';

@Component({
  selector: 'app-edit-workout',
  templateUrl: './edit-workout.component.html',
  styleUrls: ['./edit-workout.component.scss'],
})
export class EditWorkoutComponent implements OnInit {
  @Input() workout: WorkoutInterface;
  constructor() {}

  ngOnInit(): void {}
}
