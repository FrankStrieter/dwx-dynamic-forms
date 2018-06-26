import { ControlFn } from './control-fn.interface';

import {
  Checkbox,
  Input as CustomInput,
  Radiogroup,
  Selection,
} from '../models/forms';

import { ApiCheckboxControl } from '../models/api-checkbox-control';
import { ApiInputControl } from '../models/api-input-control';
import { ApiRadiogroupControl } from '../models/api-radiogroup-control';
import { ApiSelectControl } from '../models/api-select-control';
import { FormControl } from '@angular/forms';

export function initializeControls(): ControlFn {
  return {
    input: (control: ApiInputControl) => createInputControl(control),
    doubleinput: (control: ApiInputControl) => createInputControl(control),
    select: (control: ApiSelectControl) => createSelectControl(control),
    checkbox: (control: ApiCheckboxControl) => createCheckboxControl(control),
    radiogroup: (control: ApiRadiogroupControl) =>
      createRadiogroupControl(control),
  };
}

function createInputControl(control: ApiInputControl): FormControl {
  return new CustomInput(control).getControl();
}

function createCheckboxControl(control: ApiCheckboxControl): FormControl {
  return new Checkbox(control).getControl();
}

function createRadiogroupControl(control: ApiRadiogroupControl): FormControl {
  return new Radiogroup(control).getControl();
}

function createSelectControl(control: ApiSelectControl): FormControl {
  return new Selection(control).getControl();
}
