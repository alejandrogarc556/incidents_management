import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityLabel',
  standalone: true
})
export class PriorityLabelPipe implements PipeTransform {
  transform(priority: string): string {
    switch (priority) {
      case 'LOW':
        return 'Low Priority';

      case 'MEDIUM':
        return 'Medium Priority';

      case 'HIGH':
        return 'High Priority';

      case 'CRITICAL':
        return 'Critical Priority';

      default:
        return 'Unknown Priority';
    }
  }
}
