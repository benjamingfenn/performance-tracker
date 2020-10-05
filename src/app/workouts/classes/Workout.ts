import { BaseModel } from '../../core/classes/BaseModel';
import { WorkoutInterface, WorkoutComponentInterface } from '../interfaces';
import { Focus } from '../enums';

export class Workout extends BaseModel implements WorkoutInterface {
  id: string;
  name: string = '';
  focus: Focus;
  components: WorkoutComponentInterface[] = [];

  constructor(workout?: WorkoutInterface) {
    super(workout);
  }
}