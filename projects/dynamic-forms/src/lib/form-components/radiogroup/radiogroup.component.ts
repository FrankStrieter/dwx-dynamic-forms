import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Radiogroup } from '../../core/models/forms/radiogroup';

@Component({
  selector: 'libdf-radiogroup',
  templateUrl: './radiogroup.component.html',
  styleUrls: ['./radiogroup.component.scss'],
})
export class RadiogroupComponent {
  @Input() control: Radiogroup;
  @Input() form: FormGroup;
}
