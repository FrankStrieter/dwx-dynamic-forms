import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Checkbox } from '../models/forms/checkbox';

@Component({
  selector: 'libdf-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
  @Input() control: Checkbox;
  @Input() form: FormGroup;
  constructor() {}

  ngOnInit() {}

  log(event) {
    console.log(this.form.get('name'));
  }
}
