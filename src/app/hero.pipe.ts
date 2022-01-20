import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'heroPipe'
})
export class HeroPipe implements PipeTransform {

  transform(name: string): string {
    if(name.length > 10)
    return name.toLowerCase()
    else
    return name.toUpperCase();
  }

}
