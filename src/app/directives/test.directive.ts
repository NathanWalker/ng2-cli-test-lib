import {Directive, ElementRef} from 'angular2/core';

@Directive({
  selector: 'test'
})
export class TestDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.innerText = "Angular CLI is going to rock.";
  }
}
