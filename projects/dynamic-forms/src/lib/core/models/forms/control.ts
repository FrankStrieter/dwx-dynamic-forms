import { Validator } from '../validators/validator';
import { ValidatorFn, FormControl } from '@angular/forms';
import { Option } from './option';

export abstract class Control {
  public validators: ValidatorFn[];
  public name: string;
  public value: string | number | boolean | Option | Option[];
  public label: string;

  constructor(control: any) {
    this.label = control.label;
    this.name = control.name;
    this.validators = control.validators.map(validator => {
      return new Validator(validator.type, validator.argument);
    });
  }

  getControl() {
    return new FormControl(this.value, this.validators);
  }
}
