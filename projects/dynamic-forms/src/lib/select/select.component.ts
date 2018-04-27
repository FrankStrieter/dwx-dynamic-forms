import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Selection } from '../models/forms/selection';

@Component({
  selector: 'libdf-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  @Input() control: Selection;
  @Input() form: FormGroup;
}
