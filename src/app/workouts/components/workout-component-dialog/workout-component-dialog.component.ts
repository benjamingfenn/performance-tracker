import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WorkoutComponent } from '../../classes/WorkoutComponent';

@Component({
  selector: 'app-workout-component-dialog',
  templateUrl: './workout-component-dialog.component.html',
  styleUrls: ['./workout-component-dialog.component.scss'],
})
export class WorkoutComponentDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: WorkoutComponent) {}
}
