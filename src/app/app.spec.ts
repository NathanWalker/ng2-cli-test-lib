import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {App} from '../app/app';

beforeEachProviders(() => [App]);

describe('App: Ng2CliTestLib', () => {
  it('should have the `title`', inject([App], (app) => {
    expect(app.title).toBe('Angular 2');
  }));
});
