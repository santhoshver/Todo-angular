import { IdGeneratorService } from '../services/id-generator.service';
import { Injectable, Injector, ReflectiveInjector  } from '@angular/core';

@Injectable()
export class Task {
  description: string;
  id: string;
  isCompleted: boolean;
  isSelected: boolean;

  constructor(desc: string, public IdGenerator?: IdGeneratorService, parentInjector?:Injector){

    let injector = ReflectiveInjector.resolveAndCreate([IdGeneratorService]);
    this.IdGenerator = injector.get(IdGeneratorService, parentInjector);

    this.description = desc;
    this.isCompleted = false;
    this.isSelected = false;
    this.id = this.IdGenerator.newId();
  }
}
