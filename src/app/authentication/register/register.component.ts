import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormDataService } from '../formdata.service';

@Component({
  selector: 'dwx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  formData: {};
  form: FormGroup = new FormGroup({});

  constructor(formDataService: FormDataService) {
    this.formData = formDataService.formData;
    formDataService.$formData.subscribe(data => {
      this.form = new FormGroup({});
      this.formData = data;
    });
  }

  submitForm() {
    // this.apiService.regest('POST', url, this.form.value);
  }
}
