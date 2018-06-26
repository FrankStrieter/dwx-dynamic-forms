import { ApiCheckboxControl } from '../models/api-checkbox-control';
import { ApiInputControl } from '../models/api-input-control';
import { ApiRadiogroupControl } from '../models/api-radiogroup-control';
import { ApiSelectControl } from '../models/api-select-control';
import { FormControl } from '@angular/forms';

export interface ControlFn {
  input: (control: ApiInputControl) => FormControl;
  doubleinput: (control: ApiInputControl) => FormControl;
  select: (control: ApiSelectControl) => FormControl;
  checkbox: (control: ApiCheckboxControl) => FormControl;
  radiogroup: (control: ApiRadiogroupControl) => FormControl;
}
