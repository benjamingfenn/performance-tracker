import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Workout } from '../../classes/Workout';
import { WorkoutComponent } from '../../classes/WorkoutComponent';
import { Focus } from '../../enums';
import { WorkoutComponentDialogComponent } from "../workout-component-dialog/workout-component-dialog.component"

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.scss'],
})
export class WorkoutFormComponent implements OnInit {
  @Input() workout: Workout;
  focuses: object = Focus;
  panelOpenState: boolean = false;

  constructor(public dialog: MatDialog) {
    if (!this.workout) {
      this.workout = new Workout();
    }
  }

  openComponentFormDialog() {
    const dialogRef = this.dialog.open(WorkoutComponentDialogComponent, {
      data: new WorkoutComponent()
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.workout.components.push(result);
      }
    });
  }

  ngOnInit(): void {}
}