import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'removeBr' })
export class RemoveBrPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/<br>/g, ' ');
  }
}