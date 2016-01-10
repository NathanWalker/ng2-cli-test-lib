import {TestDirective} from './src/app/directives/test.directive';
import {TestService} from './src/app/providers/test.provider';
import {TestService2} from './src/app/providers/test2.provider';
import {TestPipe} from './src/app/pipes/test.pipe';
import {TestStyles} from './src/app/test.styles';

export * from './src/app/directives/test.directive';
export * from './src/app/providers/test.provider';
export * from './src/app/providers/test2.provider';
export * from './src/app/pipes/test.pipe';
export * from './src/app/test.styles';

export default {
  directives: [TestDirective],
  pipes: [TestPipe],
  providers: [TestService, TestService2],
  styles: TestStyles.styles(),
  styleUrls: ['src/css/test.css']
}
