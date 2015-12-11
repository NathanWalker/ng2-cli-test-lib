import {TestDirective} from './src/app/directives/test.directive';
import {TestService, TestService2} from './src/app/services/test.service';
import {TestPipe} from './src/app/pipes/test.pipe';

export * from './src/app/directives/test.directive';
export * from './src/app/services/test.service';
export * from './src/app/pipes/test.pipe';

export default {
  providers: [TestService, TestService2],
  directives: [TestDirective],
  pipes: [TestPipe]
}
