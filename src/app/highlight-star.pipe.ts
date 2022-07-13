import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightStar'
})
export class HighlightStarPipe implements PipeTransform {

  transform(value: number[], args?: number[]): string {
    const star = args[0];
    const highlight = value.indexOf(star);

    if (highlight >= 0) {
      return 'star'
    } else {
      return 'star_border'
    }
  }
}