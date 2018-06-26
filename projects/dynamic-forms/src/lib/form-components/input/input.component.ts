import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Input as CustomInput } from '../../core/models/forms/input';

@Component({
  selector: 'libdf-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() control: CustomInput;
  @Input() form: FormGroup;
  @Input() controlName: 'string';
}
