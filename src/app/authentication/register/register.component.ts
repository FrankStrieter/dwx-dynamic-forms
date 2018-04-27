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

  formData: any = {
    email: {
      type: 'input',
      name: 'email',
      value: 'fs@co.IT.eu',
      placeholder: 'E-Mail',
      kind: 'text',
      validators: [{ type: 'required' }],
    },
    lastname: {
      type: 'input',
      name: 'lastname',
      value: '',
      placeholder: 'Nachname',
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
    okay: {
      type: 'checkbox',
      label: 'Sparbuch überschreiben',
      name: 'okay',
      value: true,
      validators: [],
    },
    relationship: {
      type: 'radiogroup',
      label: 'Please choose',
      name: 'relationship',
      value: 'b2b',
      options: [{ key: 'b2b', value: 'b2b' }, { key: 'b2c', value: 'b2c' }],
      validators: [],
    },

    name: {
      type: 'group',
      name: 'name',
      items: {
        firstname: {
          type: 'input',
          name: 'firstname',
          value: 'Frank',
          placeholder: 'Name',
          kind: 'text',
          validators: [{ type: 'required' }],
        },
        lastname: {
          type: 'input',
          value: '',
          placeholder: 'Nachname',
          kind: 'text',
          name: 'lastname',
          validators: [{ type: 'required' }],
        },
      },
    },

    tags: {
      type: 'array',
      name: 'Tags',
      items: [
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
      ],
    },
    addresses: {
      type: 'array',
      name: 'Adresses',
      items: [
        {
          type: 'group',
          name: 'address 1',
          items: {
            street: {
              type: 'input',
              name: 'street',
              value: 'Rosenplatz',
              placeholder: 'Straße',
              kind: 'text',
              validators: [{ type: 'required' }],
            },
            number: {
              type: 'input',
              value: '10',
              placeholder: 'Hausnummer',
              kind: 'text',
              name: 'number',
              validators: [{ type: 'required' }],
            },
          },
        },
        {
          type: 'group',
          name: 'address 2',
          items: {
            street: {
              type: 'input',
              name: 'street',
              value: 'Kriegsstraße',
              placeholder: 'Straße',
              kind: 'text',
              validators: [{ type: 'required' }],
            },
            number: {
              type: 'input',
              value: '39',
              placeholder: 'Hausnummer',
              kind: 'text',
              name: 'number',
              validators: [{ type: 'required' }],
            },
          },
        },
      ],
    },
  };

  constructor() {}

  submitForm(form: NgForm) {
    console.log(form.value);
    // this.apiService.post(url, form.value);
  }
}
