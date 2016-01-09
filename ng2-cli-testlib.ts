import {TestDirective} from './src/app/directives/test.directive';
import {TestService} from './src/app/services/test.service';
import {TestService2} from './src/app/services/test2.service';
import {TestPipe} from './src/app/pipes/test.pipe';

export * from './src/app/directives/test.directive';
export * from './src/app/services/test.service';
export * from './src/app/services/test2.service';
export * from './src/app/pipes/test.pipe';

export default {
  directives: [TestDirective],
  pipes: [TestPipe],
  services: [TestService, TestService2],
}