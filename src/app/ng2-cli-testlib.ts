import {Component} from 'angular2/core';
import {TestService} from './services/test.service';
import {TestService2} from './services/test2.service';
import {TestDirective} from './directives/test.directive';
import {TestPipe} from './pipes/test.pipe';


@Component({
  selector: 'ng2-cli-testlib-app',
  providers: [],
  templateUrl: 'app/ng2-cli-testlib.html',
  directives: [],
  pipes: []
})
export class Ng2CliTestlibApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
