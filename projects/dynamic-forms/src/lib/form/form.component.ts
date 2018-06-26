import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormsFactoryService } from '../core/forms-factory/forms-factory.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'dwx-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, OnChanges {
  @Input() formData: any;
  @Input() form: FormGroup;

  constructor(private factory: FormsFactoryService) {}

  ngOnInit() {
    if (this.form instanceof FormGroup) {
      this.form = this.factory.createCustomControlGroup(
        this.formData,
        this.form
      );
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.form instanceof FormGroup) {
      this.form = this.factory.createCustomControlGroup(
        this.formData,
        this.form
      );
    }
  }
}
