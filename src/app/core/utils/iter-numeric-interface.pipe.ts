import { Pipe, PipeTransform } from '@angular/core';

/*
 * Return oject of enum string keys and int values with only string keys.
 * When TS is compiled it turns interfaces into an object that maps both keys to
 * values, and values to keys. To simplify the iteration of interfaces,
 * primarily for use in forms, we need to transform that object into one that
 * only represents keys to values.
 * Usage:
 *   DistanceUnit | iterInterface
 * Example:
 *   {{ distanceUnits | iterInterface }}
 *   formats to: {Miles: 1, Kilometers: 2, Meters: 3}
*/
@Pipe({
  name: 'iterNumericInterface',
})
export class IterNumericInterfacePipe implements PipeTransform {
  transform(interfaceObject: object): object {
    let transformedObject = [];
    for (const k in interfaceObject) {
      if (isNaN(Number(k))) {
        transformedObject.push({key: k, value: interfaceObject[k]});
      }
    }
    return transformedObject;
  }
}
