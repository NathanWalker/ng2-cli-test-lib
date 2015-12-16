import {bootstrap} from 'angular2/platform/browser';

import {TestService, TestService2} from './app/providers/test.provider';

/*
 * App Component
 * our top level component that holds all of our components
 */
import {App} from './app/app';

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
export function main() {
  return bootstrap(App, [
    // These are dependencies of our App
    TestService,
    TestService2
  ])
  .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);
