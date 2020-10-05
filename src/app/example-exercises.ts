import { ExerciseInterface } from './workouts/interfaces';
import { Focus, Measure } from './workouts/enums';

export const ExampleExercises: Array<ExerciseInterface> = [
  {
    id: '6223982c-8ac8-4f47-b363-eca021719184',
    name: 'Sprint',
    focus: Focus.Speed,
    measures: [Measure.Distance, Measure.Reps],
  },
  {
    id: '5223982c-8ac8-4f47-b363-eca021719184',
    name: 'Jog',
    focus: Focus.Endurance,
    measures: [Measure.Distance],
  },
];