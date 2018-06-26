import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  $formData = new Subject();

  private _formData = {
    email: {
      type: 'input',
      name: 'email',
      value: '',
      placeholder: 'E-Mail',
      inputtype: 'email',
      validators: [{ type: 'required' }, { type: 'email' }],
    },
    password: {
      type: 'input',
      name: 'password',
      value: '',
      placeholder: 'Password',
      inputtype: 'password',
      validators: [{ type: 'required' }],
    },
    salutation: {
      type: 'select',
      label: 'Anrede',
      placeholder: 'bitte wählen',
      name: 'salutation',
      value: '',
      options: [{ key: 'mr', value: 'Mr.' }, { key: 'mrs.', value: 'Mrs.' }],
      validators: [{ type: 'required' }],
    },
    name: {
      type: 'group',
      name: 'name',
      label: 'Name',
      items: {
        firstname: {
          type: 'input',
          name: 'firstname',
          value: 'Frank',
          placeholder: 'Name',
          inputtype: 'text',
          validators: [{ type: 'required' }],
        },
        lastname: {
          type: 'input',
          value: '',
          placeholder: 'Nachname',
          inputtype: 'text',
          name: 'lastname',
          validators: [{ type: 'required' }],
        },
      },
    },

    skills: {
      type: 'array',
      name: 'skills',
      label: 'Fähigkeiten',
      items: [
        {
          type: 'input',
          value: 'Angular',
          placeholder: 'Fähigkeit 1',
          inputtype: 'text',
          validators: [],
        },
        {
          type: 'input',
          value: '',
          placeholder: 'Fähigkeit 2',
          inputtype: 'text',
          validators: [],
        },
      ],
    },
    address: {
      type: 'group',
      label: 'Adresse',
      name: 'address',
      items: {
        street: {
          type: 'input',
          name: 'street',
          value: 'Kriegsstraße',
          placeholder: 'Straße',
          inputtype: 'text',
          validators: [{ type: 'required' }],
        },
        number: {
          type: 'input',
          value: '',
          placeholder: 'Hausnummer',
          inputtype: 'text',
          name: 'number',
          validators: [{ type: 'required' }],
        },
      },
    },
    terms: {
      type: 'checkbox',
      label: 'Accept Trems & Conditions',
      name: 'terms',
      value: false,
      validators: [{ type: 'requiredTrue' }],
    },
  };

  bc = new BroadcastChannel('test_channel');

  constructor() {
    this.bc.onmessage = ev => {
      this._formData = ev.data;
      this.$formData.next(this._formData);
    };
  }

  set formData(data) {}

  propageateForm(data) {
    this.bc.postMessage(data);
    this._formData = data;
    this.$formData.next(this._formData);
  }

  get formData() {
    return this._formData;
  }
}
