import {Component} from 'angular2/angular2';

import {TestDirective} from './directives/test.directive';
import {TestPipe} from './pipes/test.pipe';
import {TestService, TestService2} from './services/test.service';

@Component({
  selector: 'app', 
  directives: [ TestDirective ],
  pipes: [TestPipe],
  styles: [`
    .title {
      font-family: Arial, Helvetica, sans-serif;
    }
    main {
      padding: 1em;
    }
  `],
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
    WebPack Angular 2 Starter by <a href="https://twitter.com/AngularClass">@AngularClass</a>
  </footer>
  `
})
export class App {
  // These are member type
  title: string;

  // TypeScript public modifiers
  constructor(private t1:TestService, private t2:TestService2) {
    this.title = 'Angular 2';
  }

  // ngOnInit() {
  //
  // }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 * or via chat on Gitter at https://gitter.im/AngularClass/angular2-webpack-starter
 */
