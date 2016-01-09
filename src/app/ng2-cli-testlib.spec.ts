import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {Ng2CliTestlibApp} from '../app/ng2-cli-testlib';

beforeEachProviders(() => [Ng2CliTestlibApp]);

describe('App: Ng2CliTestlib', () => {
  it('should have the `defaultMeaning` as 42', inject([Ng2CliTestlibApp], (app) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([Ng2CliTestlibApp], (app) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

