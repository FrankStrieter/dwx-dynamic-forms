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
  structures;
  constructor(private formBuilder: FormBuilder) {
    this.controls = this.initializeControls();
    this.structures = this.initializeStructures();
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

  initializeStructures() {
    return {
      array: (formData, formGroup, property) => {
        formGroup.addControl(
          property,
          this.formBuilder.array(
            this.createCustomControlArray(formData[property].items, formGroup)
          )
        );
        return formGroup;
      },
      group: (formData, formGroup, property) => {
        formGroup.addControl(
          formData[property].name,
          this.createCustomControlGroup(
            formData[formData[property].name].items,
            new FormGroup({})
          )
        );
        return formGroup;
      },
      control: (formData, formGroup, property) => {
        formGroup.addControl(
          property,
          this.createCustomControl(formData[property])
        );
        return formGroup;
      },
    };
  }

  initializeControls() {
    return {
      input: (control: ApiInputControl) =>
        FormsFactoryService.createInputControl(control),
      checkbox: (control: ApiCheckboxControl) =>
        FormsFactoryService.createCheckboxControl(control),
      radiogroup: (control: ApiRadiogroupControl) =>
        FormsFactoryService.createRadiogroupControl(control),
    };
  }

  createCustomControlArray(controls: AvailableControls[] | any, formGroup) {
    return controls.map((control, index) => {
      if (control.type !== 'group') {
        control.name = index.toString();
        return this.createCustomControl(control);
      } else {
        return this.createCustomControlGroup(control.items, new FormGroup({}));
      }
    });
  }

  createCustomControlGroup(formData: any, formGroup: FormGroup) {
    for (const property in formData) {
      if (formData[property]) {
        formGroup = this.structures[formData[property].type]
          ? this.structures[formData[property].type](
              formData,
              formGroup,
              property
            )
          : this.structures['control'](formData, formGroup, property);
      }
    }
    return formGroup;
  }
}
