import { TestDirective } from './src/app/directives/test.directive';
import { TestService } from './src/app/providers/test.provider';
import { TestPipe } from './src/app/pipes/test.pipe';
export * from './src/app/directives/test.directive';
export * from './src/app/providers/test.provider';
export * from './src/app/providers/test2.provider';
export * from './src/app/pipes/test.pipe';
export * from './src/app/test.styles';
declare var _default: {
    directives: typeof TestDirective[];
    pipes: typeof TestPipe[];
    providers: typeof TestService[];
    styles: string[];
    styleUrls: string[];
};
export default _default;
