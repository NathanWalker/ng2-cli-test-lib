System.register(['angular2/core', './directives/test.directive', './pipes/test.pipe', './providers/test.provider', './providers/test2.provider', './test.styles'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, test_directive_1, test_pipe_1, test_provider_1, test2_provider_1, test_styles_1;
    var Ng2CliTestLibApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (test_directive_1_1) {
                test_directive_1 = test_directive_1_1;
            },
            function (test_pipe_1_1) {
                test_pipe_1 = test_pipe_1_1;
            },
            function (test_provider_1_1) {
                test_provider_1 = test_provider_1_1;
            },
            function (test2_provider_1_1) {
                test2_provider_1 = test2_provider_1_1;
            },
            function (test_styles_1_1) {
                test_styles_1 = test_styles_1_1;
            }],
        execute: function() {
            Ng2CliTestLibApp = (function () {
                function Ng2CliTestLibApp(t1, t2) {
                    this.t1 = t1;
                    this.t2 = t2;
                    this.title = 'Angular 2';
                }
                Ng2CliTestLibApp = __decorate([
                    core_1.Component({
                        selector: 'ng2-cli-test-lib-app',
                        providers: [test_provider_1.TestService, test2_provider_1.TestService2],
                        templateUrl: 'app/ng2-cli-test-lib.html',
                        directives: [test_directive_1.TestDirective],
                        pipes: [test_pipe_1.TestPipe],
                        encapsulation: core_1.ViewEncapsulation.None,
                        styles: ["\n    .title {\n      font-family: Arial, Helvetica, sans-serif;\n    }\n    main {\n      padding: 1em;\n    }\n  "].concat(test_styles_1.TestStyles.styles()),
                        styleUrls: [
                            '../css/test.css'
                        ],
                        template: "\n  <header>\n    <h1 class=\"title\">Hello {{ title }}</h1>\n  </header>\n  <main>\n    Your Content Here\n    <div>\n      <input type=\"text\" [(ngModel)]=\"title\" autofocus>\n      <div>{{title | uppercase}}</div>\n    </div>\n    <test></test>\n  </main>\n  <footer>\n    This is just an experimental lib for testing with <a href=\"https://github.com/angular/angular-cli\">angular-cli</a>.\n  </footer>\n  "
                    }), 
                    __metadata('design:paramtypes', [test_provider_1.TestService, test2_provider_1.TestService2])
                ], Ng2CliTestLibApp);
                return Ng2CliTestLibApp;
            })();
            exports_1("Ng2CliTestLibApp", Ng2CliTestLibApp);
        }
    }
});
//# sourceMappingURL=ng2-cli-test-lib.js.map