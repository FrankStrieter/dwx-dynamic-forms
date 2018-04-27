import { Injectable } from '@angular/core';
import { Checkbox, Input, Radiogroup } from 'dynamic-forms';

import { ApiCheckboxControl } from '../models/api-checkbox-control';
import { ApiInputControl } from '../models/api-input-control';
import { ApiRadiogroupControl } from '../models/api-radiogroup-control';
import { FormGroup, FormBuilder } from '@angular/forms';

type AvailableControls =
  | ApiInputControl
  | ApiCheckboxControl
  | ApiRadiogroupControl;

@Injectable({
  providedIn: 'root',
})
export class FormsFactoryService {
  controls;
  constructor(private formBuilder: FormBuilder) {
    this.controls = {
      input: (control: ApiInputControl) =>
        FormsFactoryService.createInputControl(control),
      checkbox: (control: ApiCheckboxControl) =>
        FormsFactoryService.createCheckboxControl(control),
      radiogroup: (control: ApiRadiogroupControl) =>
        FormsFactoryService.createRadiogroupControl(control),
    };
  }

  static createInputControl(control: ApiInputControl) {
    return new Input(control).getControl();
  }

  static createCheckboxControl(control: ApiCheckboxControl) {
    return new Checkbox(control).getControl();
  }

  static createRadiogroupControl(control: ApiRadiogroupControl) {
    return new Radiogroup(control).getControl();
  }

  createCustomControl(control: AvailableControls) {
    return this.controls[control.type](control);
  }

  createCustomControlArray(controls: AvailableControls[] | any) {
    return controls.map((control, index) => {
      control.name = index.toString();
      return this.createCustomControl(control);
    });
  }

  createCustomControlGroup(formData: any, formGroup: FormGroup) {
    for (const property in formData) {
      if (formData[property].type === 'array') {
        formGroup.addControl(
          property,
          this.formBuilder.array(
            this.createCustomControlArray(formData[property].items)
          )
        );
      } else if (formData[property].type === 'group') {
        formGroup.addControl(
          formData[property].name,
          this.createCustomControlGroup(
            formData[formData[property].name].items,
            new FormGroup({})
          )
        );
      } else if (formData[property].type) {
        formGroup.addControl(
          property,
          this.createCustomControl(formData[property])
        );
      }
    }

    return formGroup;
  }
}
