import { Option } from './option';
import { Control } from './control';

export class Selection extends Control {
  options: Option[];
  value: Option[];
  placeholder: string;

  constructor(control: any) {
    super(control);
    this.placeholder = control.placeholder;
    this.value = control.value;
  }
}
