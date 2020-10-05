import { Component, Input, OnInit } from '@angular/core';
import { ExerciseInterface } from '../../interfaces';
import { Exercise } from '../../classes/Exercise';
import { Focus, Measure } from '../../enums';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.scss'],
})
export class AddExerciseComponent implements OnInit {
  @Input() exercise: ExerciseInterface;
  focuses: object = Focus;
  measures: object = Measure;

  constructor() {
    if (!this.exercise) {
      this.exercise = new Exercise();
    }
  }

  ngOnInit(): void {}
}
