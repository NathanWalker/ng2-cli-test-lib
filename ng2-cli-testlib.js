System.register(['./src/app/directives/test.directive', './src/app/services/test.service', './src/app/services/test2.service', './src/app/pipes/test.pipe'], function(exports_1) {
    var test_directive_1, test_service_1, test2_service_1, test_pipe_1;
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
            function (test_service_1_1) {
                test_service_1 = test_service_1_1;
                exportStar_1(test_service_1_1);
            },
            function (test2_service_1_1) {
                test2_service_1 = test2_service_1_1;
                exportStar_1(test2_service_1_1);
            },
            function (test_pipe_1_1) {
                test_pipe_1 = test_pipe_1_1;
                exportStar_1(test_pipe_1_1);
            }],
        execute: function() {
            exports_1("default",{
                directives: [test_directive_1.TestDirective],
                pipes: [test_pipe_1.TestPipe],
                services: [test_service_1.TestService, test2_service_1.TestService2],
            });
        }
    }
});
//# sourceMappingURL=ng2-cli-testlib.js.map