import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormsMapperService {
  formAsObject: any = {};
  constructor() {}

  getFormData(dndArray: any[]) {
    const form = {};
    dndArray.forEach(element => {
      if (element.type === 'group') {
        const e = JSON.parse(JSON.stringify(element));
        e.items = this.getFormData(e.items);
        form[element.name] = e;
      } else if (element.type === 'array') {
        element.items = element.items.map(field => field);
        form[element.name] = element;
      } else {
        form[element.name] = element;
      }
    });
    return form;
  }
}
