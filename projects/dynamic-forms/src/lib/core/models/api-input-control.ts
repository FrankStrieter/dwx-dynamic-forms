import { ApiControl } from './api-control';

export class ApiInputControl extends ApiControl {
  type: 'input';
  value: string | number;
  inputtype: 'text' | 'number' | 'date' | 'password';
  placeholder: string;
}
