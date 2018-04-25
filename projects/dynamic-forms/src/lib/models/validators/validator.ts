import { Validators, ValidatorFn } from '@angular/forms';

export class Validator {
  validators = {
    required: () => Validators.required,
    requiredTrue: () => Validators.requiredTrue,
    minLength: args => Validators.minLength(args[0]),
    maxLength: args => Validators.maxLength(args[0]),
    pattern: args => Validators.pattern(args[0]),
  };

  constructor(type: 'minLength' | 'maxLength', length: number);
  constructor(type: 'pattern', pattern: string);
  constructor(type: string, ...args);
  constructor(type: string, ...args) {
    return this.validators[type](args);
  }
}
