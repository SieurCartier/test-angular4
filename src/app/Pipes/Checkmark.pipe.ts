import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'checkmark'})
export class Checkmark implements PipeTransform {
    transform(value: boolean): string {
      return value ? '\u2713' : '\u2718';
    }
}
