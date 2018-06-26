import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Checkbox } from '../../core/models/forms/checkbox';

@Component({
  selector: 'libdf-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  @Input() control: Checkbox;
  @Input() form: FormGroup;
  constructor() {}
}
