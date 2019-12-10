import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {
   defaultImagePath = 'rotating_card_profile2.png';
  transform(value: string): string {
    if (! value.trim().length) {
      return this.defaultImagePath;
    }
    return value;
  }

}
