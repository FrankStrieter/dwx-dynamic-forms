import { Option } from './option';
import { Control } from './control';
import { FormControl } from '@angular/forms';

export class Checkbox extends Control {
  text: string;
  value: boolean;

  constructor(control: any) {
    super(control);
    this.value = control.value;
  }
}
