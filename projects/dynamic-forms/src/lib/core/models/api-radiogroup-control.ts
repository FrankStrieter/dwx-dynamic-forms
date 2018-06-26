import { ApiControl } from './api-control';

export interface Option {
  key: string;
  value: string;
}

export class ApiRadiogroupControl extends ApiControl {
  type: 'radiogroup';
  value: Option;
  options: Option[];
}
