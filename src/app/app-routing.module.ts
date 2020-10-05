import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddWorkoutComponent } from './workouts/components/add-workout/add-workout.component';
import { EditWorkoutComponent } from './workouts/components/edit-workout/edit-workout.component';
import { AddExerciseComponent } from './workouts/components/add-exercise/add-exercise.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },

  // Workouts
  { path: 'add-workout', component: AddWorkoutComponent },
  { path: 'edit-workout/:id', component: EditWorkoutComponent },
  { path: 'add-exercise', component: AddExerciseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
