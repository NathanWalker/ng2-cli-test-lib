import {Directive, ElementRef} from 'angular2/core';

@Directive({
  selector: 'test'
})
export class TestDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.innerHTML = `
      <a href='https://github.com/angular/angular-cli' target='_blank'>Angular CLI is going to rock.</a>
    `;
  }
}
