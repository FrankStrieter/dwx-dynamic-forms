import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { Input as CustomInput } from '../../core/models/forms/input';

@Component({
  selector: 'libdf-double-input-verification',
  templateUrl: './double-input-verification.component.html',
  styleUrls: ['./double-input-verification.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DoubleInputVerificationComponent),
      multi: true,
    },
  ],
})
export class DoubleInputVerificationComponent implements ControlValueAccessor {
  input: string;
  verification: string;
  @Input() control: CustomInput;
  @Input() form: FormGroup;
  valid = false;

  propagate: (value: string) => void;

  writeValue(value: string): void {
    if (!value) {
      this.input = value;
      this.verification = value;
    }
    this.input = value;
  }

  registerOnChange(fn: any): void {
    this.propagate = fn;
  }
  registerOnTouched(fn: any): void {
    // ..
  }

  propagateInput() {
    if (this.input === this.verification) {
      this.propagate(this.input);
    } else {
      this.propagate(null);
      this.valid = this.form.get(this.control.name).valid;
    }
  }
}
