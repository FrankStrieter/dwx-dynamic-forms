import { Option } from './option';
import { Control } from './control';
import { FormControl } from '@angular/forms';

export class Selection extends Control {
  options: Option[];
  value: Option[];

  constructor(control: any) {
    super(control);
    this.value = control.value;
  }
}
