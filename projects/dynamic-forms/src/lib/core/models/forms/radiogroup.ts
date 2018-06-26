import { Option } from './option';
import { Control } from './control';

export class Radiogroup extends Control {
  options: Option[];
  value: Option;

  constructor(control) {
    super(control);
    this.options = control.options;
    this.value = control.value;
  }
}
