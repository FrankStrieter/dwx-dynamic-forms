import { ApiControl } from './api-control';
interface Option {
  key: string;
  value: string;
}

export class ApiSelectControl extends ApiControl {
  type: 'radiogroup';
  value: Option;
  options: Option[];
}
