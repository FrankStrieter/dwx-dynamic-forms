import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'properties' })
export class PropertiesPipe implements PipeTransform {
  transform(value, args: string[]): any {
    const properties = [];
    for (const key in value) {
      if (key) {
        properties.push({ name: key, value: value[key] });
      }
    }
    return properties;
  }
}
