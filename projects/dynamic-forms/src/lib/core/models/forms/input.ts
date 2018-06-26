import { Control } from './control';

export class Input extends Control {
  value: string | number;
  inputtype: 'password' | 'text' | 'date' | 'number';
  placeholder: string;

  constructor(control: any) {
    super(control);
    this.value = control.value;
    this.inputtype = control.inputtype;
    this.placeholder = control.placeholder;
  }
}
