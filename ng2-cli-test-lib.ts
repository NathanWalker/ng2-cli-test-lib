import {TestDirective} from './src/directives/test.directive';
import {TestService} from './src/providers/test.provider';
import {TestService2} from './src/providers/test2.provider';
import {TestPipe} from './src/pipes/test.pipe';
import {TestStyles} from './src/test.styles';

export * from './src/directives/test.directive';
export * from './src/providers/test.provider';
export * from './src/providers/test2.provider';
export * from './src/pipes/test.pipe';
export * from './src/test.styles';

export default {
  directives: [TestDirective],
  pipes: [TestPipe],
  providers: [TestService, TestService2],
  styles: TestStyles.styles(),
  styleUrls: ['src/css/test.css']
}
