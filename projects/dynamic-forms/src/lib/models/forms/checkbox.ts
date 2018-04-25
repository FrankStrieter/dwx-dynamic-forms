import { Option } from './option';
import { Control } from './control';
import { FormControl } from '@angular/forms';

export class Checkbox extends Control {
  text: string;
  value: boolean;

  getControl() {
    return new FormControl(this.value, this.validators);
  }
}
