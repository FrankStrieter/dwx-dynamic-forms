import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import { Control } from '../core/models/control';

@Component({
  selector: 'dwx-admin-form-input',
  templateUrl: './admin-form-input.component.html',
  styleUrls: ['./admin-form-input.component.scss'],
})
export class AdminFormInputComponent implements OnInit {
  @Input() control: Control;
  @Output() update = new EventEmitter<Control>();
  form: FormGroup;
  edit = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: this.fb.control(this.control.name),
      type: this.fb.control(this.control.type),
      inputtype: this.fb.control(this.control.inputtype),
      placeholder: this.fb.control(this.control.placeholder),
      label: this.fb.control(this.control.label),
      options: this.fb.array([]),
      validators: this.fb.control(this.control.validators),
      value: this.fb.control(this.control.value),
    });
  }

  toggleEdit(event) {
    this.updateControl();
    this.edit = !this.edit;
  }

  updateControl() {
    for (let key in this.control) {
      this.control[key] = this.form.value[key];
    }
    //this.controlChange.emit(this.form.value);
    this.update.emit(this.form.value);
    //this.controlChange.emit(this.form.value);
  }

  addOption() {
    (<FormArray>this.form.get('options')).push(
      this.fb.group({ key: this.fb.control(''), value: this.fb.control('') })
    );
    this.control.options.push({ key: '', value: '' });
  }

  removeOption(index: number) {
    this.control.options.splice(index, 1);
    (<FormArray>this.form.get('options')).removeAt(index);
  }
}
