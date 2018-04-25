import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Checkbox } from '../models/forms/checkbox';
import { Radiogroup } from '../models/forms/radiogroup';

@Component({
  selector: 'libdf-radiogroup',
  templateUrl: './radiogroup.component.html',
  styleUrls: ['./radiogroup.component.scss'],
})
export class RadiogroupComponent {
  @Input() control: Radiogroup;
  @Input() form: FormGroup;
}
