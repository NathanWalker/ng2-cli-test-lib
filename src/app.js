System.register(['angular2/platform/browser', './app/ng2-cli-testlib'], function(exports_1) {
    var browser_1, ng2_cli_testlib_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (ng2_cli_testlib_1_1) {
                ng2_cli_testlib_1 = ng2_cli_testlib_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(ng2_cli_testlib_1.Ng2CliTestlibApp);
        }
    }
});
//# sourceMappingURL=app.js.map