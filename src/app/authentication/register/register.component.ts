import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { FormsFactoryService } from '../../core/forms-factory/forms-factory.service';
import { ApiControl } from '../../core/models/api-control';
import { ApiCheckboxControl } from '../../core/models/api-checkbox-control';
import { ApiInputControl } from '../../core/models/api-input-control';

@Component({
  selector: 'dwx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  salutation: string;
  firstname: string;
  lastname: string;
  street: string;
  phone: string;
  password: string;

  form: FormGroup = new FormGroup({});

  testdata: any = {
    name: {
      type: 'input',
      name: 'name',
      value: 'Frank',
      placeholder: 'Name',
      kind: 'text',
      validators: [{ type: 'required' }],
    },
    terms: {
      type: 'checkbox',
      label: 'Accept Terms & Conditions',
      name: 'terms',
      value: false,
      validators: [{ type: 'requiredTrue' }],
    },
    relationship: {
      type: 'radiogroup',
      label: 'Please choose',
      name: 'relationship',
      value: '',
      options: [{ key: 'b2b', value: 'b2b' }, { key: 'b2c', value: 'b2c' }],
      validators: [],
    },
    tags: [
      {
        type: 'input',
        value: 'Priority 1',
        placeholder: 'Tag',
        kind: 'text',
        validators: [{ type: 'required' }],
      },
      {
        type: 'input',
        value: 'Test 2',
        placeholder: 'Tag',
        kind: 'text',
        validators: [{ type: 'required' }],
      },
      {
        type: 'input',
        value: 'Test 5',
        placeholder: 'Tag',
        kind: 'text',
        validators: [{ type: 'required' }],
      },
    ],
  };

  constructor(formBuilder: FormBuilder, factory: FormsFactoryService) {
    for (const test in this.testdata) {
      if (this.testdata[test].type) {
        this.form.addControl(
          test,
          factory.createCustomControl(this.testdata[test])
        );
      } else if (Array.isArray(this.testdata[test])) {
        this.form.addControl(
          test,
          formBuilder.array(
            factory.createCustomControlArray(this.testdata[test])
          )
        );
        console.log(this.form);
      }
    }

    // this.form.addControl(
    //   'name',
    //   factory.createInputControl(this.testdata.name)
    // );
    // this.form.addControl(
    //   'terms',
    //   factory.createCheckboxControl(this.testdata.terms)
    // );
  }

  submitForm(form: NgForm) {
    console.log(form.value);
    // this.apiService.post(url, form.value);
  }
}
