import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ApiCheckboxControl } from '../models/api-checkbox-control';
import { ApiInputControl } from '../models/api-input-control';
import { ApiRadiogroupControl } from '../models/api-radiogroup-control';
import { initializeControls } from './controls';
import { ApiSelectControl } from '../models/api-select-control';

export type AvailableControls =
  | ApiInputControl
  | ApiCheckboxControl
  | ApiRadiogroupControl
  | ApiSelectControl;

@Injectable({
  providedIn: 'root',
})
export class FormsFactoryService {
  controls;
  structures;
  constructor(private formBuilder: FormBuilder) {
    this.controls = initializeControls();
    this.structures = this.initializeStructures();
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
            this.createCustomControlStructure(formData[property].items)
          )
        );
        return formGroup;
      },
      group: (formData, formGroup, property) => {
        formGroup.addControl(
          formData[property].name,
          this.createCustomControlGroup(
            formData[formData[property].name].items,
            this.formBuilder.group({})
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

  createCustomControlStructure(controls: AvailableControls[] | any) {
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
