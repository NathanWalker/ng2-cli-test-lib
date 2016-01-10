System.register(['./src/app/directives/test.directive', './src/app/providers/test.provider', './src/app/providers/test2.provider', './src/app/pipes/test.pipe', './src/app/test.styles'], function(exports_1) {
    var test_directive_1, test_provider_1, test2_provider_1, test_pipe_1, test_styles_1;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (test_directive_1_1) {
                test_directive_1 = test_directive_1_1;
                exportStar_1(test_directive_1_1);
            },
            function (test_provider_1_1) {
                test_provider_1 = test_provider_1_1;
                exportStar_1(test_provider_1_1);
            },
            function (test2_provider_1_1) {
                test2_provider_1 = test2_provider_1_1;
                exportStar_1(test2_provider_1_1);
            },
            function (test_pipe_1_1) {
                test_pipe_1 = test_pipe_1_1;
                exportStar_1(test_pipe_1_1);
            },
            function (test_styles_1_1) {
                test_styles_1 = test_styles_1_1;
                exportStar_1(test_styles_1_1);
            }],
        execute: function() {
            exports_1("default",{
                directives: [test_directive_1.TestDirective],
                pipes: [test_pipe_1.TestPipe],
                providers: [test_provider_1.TestService, test2_provider_1.TestService2],
                styles: test_styles_1.TestStyles.styles(),
                styleUrls: ['src/css/test.css']
            });
        }
    }
});
//# sourceMappingURL=ng2-cli-test-lib.js.map