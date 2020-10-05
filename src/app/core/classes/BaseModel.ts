import { v4 as uuid_v4 } from 'uuid';

export class BaseModel {
    id: string;

  constructor(data?: any) {
    if (!this.id) {
      this.id = uuid_v4();
    }
  }
}