System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Ng2CliTestlibApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Ng2CliTestlibApp = (function () {
                function Ng2CliTestlibApp() {
                    this.defaultMeaning = 42;
                }
                Ng2CliTestlibApp.prototype.meaningOfLife = function (meaning) {
                    return "The meaning of life is " + (meaning || this.defaultMeaning);
                };
                Ng2CliTestlibApp = __decorate([
                    core_1.Component({
                        selector: 'ng2-cli-testlib-app',
                        providers: [],
                        templateUrl: 'app/ng2-cli-testlib.html',
                        directives: [],
                        pipes: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], Ng2CliTestlibApp);
                return Ng2CliTestlibApp;
            })();
            exports_1("Ng2CliTestlibApp", Ng2CliTestlibApp);
        }
    }
});
//# sourceMappingURL=ng2-cli-testlib.js.map