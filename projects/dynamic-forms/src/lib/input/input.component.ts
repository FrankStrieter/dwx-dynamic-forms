import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Input as CustomInput } from '../models/forms/input';

@Component({
  selector: 'libdf-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() control: CustomInput;
  @Input() form: FormGroup;
  @Input() controlName: 'string';
  constructor() {}

  ngOnInit() {}

  log(event) {
    console.log(this.form.get('name'));
  }
}
