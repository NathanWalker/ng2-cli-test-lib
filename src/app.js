System.register(['angular2/platform/browser', './app/ng2-cli-test-lib'], function(exports_1) {
    var browser_1, ng2_cli_test_lib_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (ng2_cli_test_lib_1_1) {
                ng2_cli_test_lib_1 = ng2_cli_test_lib_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(ng2_cli_test_lib_1.Ng2CliTestLibApp);
        }
    }
});
//# sourceMappingURL=app.js.map