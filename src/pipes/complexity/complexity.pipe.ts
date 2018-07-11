import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'complexity'
})
export class ComplexityPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    return this.complexityToString(value);
  }

  private complexityToString(val: number): string {
    switch (val) {
      case 0:

        return 'O(log(n))';
      case 1:

        return 'O(sqrt(n))';
      case 2:

        return 'O(n)';
      case 3:

        return 'O(n log(n))';
      case 4:

        return 'O(n ^2)';
      case 5:

        return 'O(n ^3)';

      default:
        return 'Error occurred while assessing the complexity of your code, <br>' +
        'please review your code for any possible runtime errors.';

    }
  }

}
