import { BaseModel } from '../../core/classes/BaseModel';
import { WorkoutComponentInterface, ExerciseInterface } from '../interfaces';
import { WeightUnit, DistanceUnit, Benchmark } from '../enums';

export class WorkoutComponent extends BaseModel implements WorkoutComponentInterface {
  id: string;
  exercise: ExerciseInterface;
  exerciseId: string = '';
  weight: number;
  weightUnit: WeightUnit; // Default to lbs
  reps: number;
  distance: number;
  distanceUnit: DistanceUnit; // Default to meters
  time: number;
  benchmarks: Benchmark[] = [];
  rounds: number;

  constructor(workoutComponent?: WorkoutComponentInterface) {
    super(workoutComponent);
  }
}