import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular UI
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddWorkoutComponent } from './workouts/components/add-workout/add-workout.component';
import { EditWorkoutComponent } from './workouts/components/edit-workout/edit-workout.component';
import { WorkoutFormComponent } from './workouts/components/workout-form/workout-form.component';
import { WorkoutComponentFormComponent } from './workouts/components/workout-component-form/workout-component-form.component';
import { WorkoutComponentDialogComponent } from './workouts/components/workout-component-dialog/workout-component-dialog.component';
import { IterNumericInterfacePipe } from './core/utils/iter-numeric-interface.pipe';
import { AddExerciseComponent } from './workouts/components/add-exercise/add-exercise.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddWorkoutComponent,
    EditWorkoutComponent,
    WorkoutFormComponent,
    WorkoutComponentFormComponent,
    WorkoutComponentDialogComponent,
    IterNumericInterfacePipe,
    AddExerciseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatSelectModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
