import { Control } from './control';
import { FormControl } from '@angular/forms';

export class Input extends Control {
  value: string | number;
  kind: 'password' | 'text' | 'date' | 'number';
  placeholder: string;

  constructor(control: any) {
    super(control);
    this.value = control.value;
    this.kind = control.kind;
    this.placeholder = control.placeholder;
  }
}
