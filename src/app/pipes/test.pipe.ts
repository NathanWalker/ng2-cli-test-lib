import {Pipe} from 'angular2/core';

@Pipe({
  name: 'uppercase'
})
export class TestPipe {
  transform(value: string, args: string[]): any {
    console.log('TestPipe is transforming stuff!');
    return value.toUpperCase();
  }
}