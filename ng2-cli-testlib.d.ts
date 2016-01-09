import { TestDirective } from './src/app/directives/test.directive';
import { TestService } from './src/app/services/test.service';
import { TestPipe } from './src/app/pipes/test.pipe';
export * from './src/app/directives/test.directive';
export * from './src/app/services/test.service';
export * from './src/app/services/test2.service';
export * from './src/app/pipes/test.pipe';
declare var _default: {
    directives: typeof TestDirective[];
    pipes: typeof TestPipe[];
    services: typeof TestService[];
};
export default _default;
