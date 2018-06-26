export interface Control {
  name: '';
  validators: any[];
  type: string;
  label: string;
  inputtype: string;
  placeholder: string;
  options: { key: string; value: string }[];
  value?: any;
}
