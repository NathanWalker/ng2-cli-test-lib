System.register([], function(exports_1) {
    var TestStyles;
    return {
        setters:[],
        execute: function() {
            TestStyles = (function () {
                function TestStyles() {
                }
                TestStyles.styles = function () {
                    return ["\n      test a {\n        font-size:20px;\n        color:blue;\n      }\n    "];
                };
                return TestStyles;
            })();
            exports_1("TestStyles", TestStyles);
        }
    }
});
//# sourceMappingURL=test.styles.js.map