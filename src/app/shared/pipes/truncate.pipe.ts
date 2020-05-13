import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(comment?: string, limit: number = 177): string {
    if (comment?.length > limit) {
      return comment.substr(0, limit - 3).concat('...')
    } else {
      return comment
    }
  }

}
