import { Control } from './control';

export class Checkbox extends Control {
  text: string;
  value: boolean;

  constructor(control: any) {
    super(control);
    this.value = control.value;
  }
}
