import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterById'
})

@Injectable()
export class MyFilterPipe implements PipeTransform {    
    transform(items: any, filter: any): any {
      if (filter && Array.isArray(items)) {
          let filterKeys = Object.keys(filter);
          return items.filter(item =>
              filterKeys.reduce((memo, keyName) =>
                  (memo && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === "", true));
      } else {
          return items;
      }
    }
}

/*
EXAMPLE USES:

<span *ngFor="let s of testStates | filterById: {id : person.state_id}">{{ s.name }}</span>

*/