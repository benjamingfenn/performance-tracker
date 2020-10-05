import { Measure, WeightUnit, DistanceUnit, Benchmark, Focus } from './enums';

export interface ExerciseInterface {
  id: string;
  name: string;
  focus: Focus;
  measures: Measure[];
}

export interface WorkoutComponentInterface {
  id: string;
  exercise: ExerciseInterface;
  exerciseId: string;
  weight: number;
  weightUnit: WeightUnit;
  reps: number;
  distance: number;
  distanceUnit: DistanceUnit;
  time: number;
  benchmarks: Benchmark[];
  rounds: number;
}

export interface WorkoutInterface {
  id: string;
  name: string;
  focus: Focus;
  components: WorkoutComponentInterface[];
}
