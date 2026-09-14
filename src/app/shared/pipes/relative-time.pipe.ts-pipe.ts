import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relativeTime',
  standalone: true
})
export class RelativeTimePipe implements PipeTransform {
  transform(value: Date | string | undefined): string {
    if (!value) {
      return 'Unknown';
    }

    const date = new Date(value);
    const diffInMilliseconds = Date.now() - date.getTime();
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) {
      return 'Today';
    }

    if (diffInDays === 1) {
      return 'Yesterday';
    }

    return `${diffInDays} days ago`;
  }
}
