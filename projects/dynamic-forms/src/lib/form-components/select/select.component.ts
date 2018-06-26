import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Selection } from '../../core/models/forms/selection';

@Component({
  selector: 'libdf-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  @Input() control: Selection;
  @Input() form: FormGroup;
}
