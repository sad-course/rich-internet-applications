import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resum',
})
export class ResumPipe implements PipeTransform {

  transform(value: string | undefined, limit: number = 20): string {
    if (!value || typeof value !== "string") return "";

    return value.length > limit ? value.substring(0, limit) + '...' : value;

  }

}
