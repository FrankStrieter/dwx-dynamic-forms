import { Component, OnInit, Input } from '@angular/core';
import { FormsFactoryService } from '../forms-factory/forms-factory.service';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'dwx-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() formData: any;
  @Input() form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private factory: FormsFactoryService
  ) {}

  ngOnInit() {
    if (this.form instanceof FormGroup) {
      this.form = this.factory.createCustomControlGroup(
        this.formData,
        this.form
      );
    }
  }
}
