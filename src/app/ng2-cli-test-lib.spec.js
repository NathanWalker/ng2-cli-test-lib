System.register(['angular2/testing', '../app/ng2-cli-test-lib'], function(exports_1) {
    var testing_1, ng2_cli_test_lib_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (ng2_cli_test_lib_1_1) {
                ng2_cli_test_lib_1 = ng2_cli_test_lib_1_1;
            }],
        execute: function() {
            testing_1.beforeEachProviders(function () { return [ng2_cli_test_lib_1.Ng2CliTestLibApp]; });
            testing_1.describe('App: Ng2CliTestLib', function () {
                testing_1.it('should have the `defaultMeaning` as 42', testing_1.inject([ng2_cli_test_lib_1.Ng2CliTestLibApp], function (app) {
                    testing_1.expect(app.defaultMeaning).toBe(42);
                }));
                testing_1.describe('#meaningOfLife', function () {
                    testing_1.it('should get the meaning of life', testing_1.inject([ng2_cli_test_lib_1.Ng2CliTestLibApp], function (app) {
                        testing_1.expect(app.meaningOfLife()).toBe('The meaning of life is 42');
                        testing_1.expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
                    }));
                });
            });
        }
    }
});
//# sourceMappingURL=ng2-cli-test-lib.spec.js.map