import { Checkbox, Input, Radiogroup, Selection } from 'dynamic-forms';

import { ApiCheckboxControl } from '../models/api-checkbox-control';
import { ApiInputControl } from '../models/api-input-control';
import { ApiRadiogroupControl } from '../models/api-radiogroup-control';
import { ApiSelectControl } from '../models/api-select-control';

export function initializeControls() {
  return {
    input: (control: ApiInputControl) => createInputControl(control),
    select: (control: ApiSelectControl) => createSelectControl(control),
    checkbox: (control: ApiCheckboxControl) => createCheckboxControl(control),
    radiogroup: (control: ApiRadiogroupControl) =>
      createRadiogroupControl(control),
  };
}

function createInputControl(control: ApiInputControl) {
  return new Input(control).getControl();
}

function createCheckboxControl(control: ApiCheckboxControl) {
  return new Checkbox(control).getControl();
}

function createRadiogroupControl(control: ApiRadiogroupControl) {
  return new Radiogroup(control).getControl();
}

function createSelectControl(control: ApiSelectControl) {
  return new Selection(control).getControl();
}
