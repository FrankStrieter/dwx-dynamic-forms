import { ApiControl } from './api-control';

interface Option {
  key: string;
  value: string;
}

export class ApiRadiogroupControl extends ApiControl {
  type: 'radiogroup';
  value: Option;
  options: Option[];
}
