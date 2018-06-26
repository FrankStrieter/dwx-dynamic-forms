export class ApiControl {
  name: string;
  label: string;
  type: string;
  validators: { type: string; argument: string | number }[];
}
