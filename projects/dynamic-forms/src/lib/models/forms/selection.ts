import { Option } from './option';
import { Control } from './control';

export class Selection extends Control {
  options: Option[];
  value: Option[];
}
