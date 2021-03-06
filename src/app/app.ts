import {Component, ViewEncapsulation} from 'angular2/core';

import {TestDirective} from './directives/test.directive';
import {TestPipe} from './pipes/test.pipe';
import {TestService} from './providers/test.provider';
import {TestService2} from './providers/test2.provider';
import {TestStyles} from './test.styles';


@Component({
  selector: 'app',
  providers: [TestService,TestService2],
  templateUrl: 'app/ng2-cli-test-lib.html',
  directives: [TestDirective],
  pipes: [TestPipe],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .title {
      font-family: Arial, Helvetica, sans-serif;
    }
    main {
      padding: 1em;
    }
  `].concat(TestStyles.styles()),
  styleUrls: [
    'app/css/test.css'
  ],
  template: `
  <header>
    <h1 class="title">Hello {{ title }}</h1>
  </header>
  <main>
    Your Content Here
    <div>
      <input type="text" [(ngModel)]="title" autofocus>
      <div>{{title | uppercase}}</div>
    </div>
    <test></test>
  </main>
  <footer>
    This is just an experimental lib for testing with <a href="https://github.com/angular/angular-cli">angular-cli</a>.
  </footer>
  `
})
export class App {
  title: string;

  constructor(private t1: TestService, private t2: TestService2) {
    this.title = 'Angular 2';
  }
}
