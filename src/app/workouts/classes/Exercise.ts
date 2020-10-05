import { BaseModel } from '../../core/classes/BaseModel';
import { ExerciseInterface } from '../interfaces';
import { Focus, Measure } from '../enums';

export class Exercise extends BaseModel implements ExerciseInterface {
  id: string;
  name: string = '';
  focus: Focus;
  measures: Measure[] = [];

  constructor(exercise?: ExerciseInterface) {
    super(exercise);
  }
}
