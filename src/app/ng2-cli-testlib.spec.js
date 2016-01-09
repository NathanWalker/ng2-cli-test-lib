System.register(['angular2/testing', '../app/ng2-cli-testlib'], function(exports_1) {
    var testing_1, ng2_cli_testlib_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (ng2_cli_testlib_1_1) {
                ng2_cli_testlib_1 = ng2_cli_testlib_1_1;
            }],
        execute: function() {
            testing_1.beforeEachProviders(function () { return [ng2_cli_testlib_1.Ng2CliTestlibApp]; });
            testing_1.describe('App: Ng2CliTestlib', function () {
                testing_1.it('should have the `defaultMeaning` as 42', testing_1.inject([ng2_cli_testlib_1.Ng2CliTestlibApp], function (app) {
                    testing_1.expect(app.defaultMeaning).toBe(42);
                }));
                testing_1.describe('#meaningOfLife', function () {
                    testing_1.it('should get the meaning of life', testing_1.inject([ng2_cli_testlib_1.Ng2CliTestlibApp], function (app) {
                        testing_1.expect(app.meaningOfLife()).toBe('The meaning of life is 42');
                        testing_1.expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
                    }));
                });
            });
        }
    }
});
//# sourceMappingURL=ng2-cli-testlib.spec.js.map