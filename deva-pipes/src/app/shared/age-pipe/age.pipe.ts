import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: Array<number>, ...args: Array<number>): Array<number> {
    let minAge = args ? args : 50;
    return value.filter((user:any) => user.age >= minAge);
  }

}
