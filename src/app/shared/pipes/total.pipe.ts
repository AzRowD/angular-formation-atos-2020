import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: number, arg: number, arg2?: number): number {
    console.log(value);
    console.log(arg);
    console.log(arg2);
    if(value){
      if(arg2) {
      return value * arg * (1 + arg2 / 100);
      }
    return value * arg;
  }
}
}
