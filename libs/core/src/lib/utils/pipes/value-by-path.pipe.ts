import { Pipe, PipeTransform } from '@angular/core';
import { get } from 'lodash-es';

@Pipe({ name: 'valueByPath' })
export class ValueByPathPipe implements PipeTransform {
    transform(value: any, key: string): any {
        return get(value, key);
    }
}
