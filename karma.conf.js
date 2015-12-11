// @AngularClass

module.exports = function(config) {
  var _config = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      // we are building the test environment in ./spec-bundle.js
      { pattern: 'spec-bundle.js', watched: false }
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'spec-bundle.js': ['webpack', 'sourcemap']
      // 'test/**/*.spec.ts': ['webpack', 'sourcemap']
    },

    webpack: {

      resolve: {
        cache: false,
        root: __dirname,
        extensions: ['','.ts','.js','.json', '.css', '.html'],
        alias: {
          'app': 'src/app',
          'common': 'src/common'
        }
      },
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.tsx?$/,
            loader: 'ts',
            exclude: [/node_modules/],
            query: { 'ignoreDiagnostics': [ 2403 ]  } // 2403 -> Subsequent variable declarations},
          },
          { test: /\.json$/, loader: 'json' },
          { test: /\.html$/, loader: 'raw' },
          { test: /\.css$/,  loader: 'raw' }
        ]
      },
      stats: { colors: true, reasons: true },
      debug: false,
      noParse: [
        /zone\.js\/dist\/zone-microtask\.js/,
        /zone\.js\/dist\/long-stack-trace-zone\.js/,
        /zone\.js\/dist\/jasmine-patch\.js/
      ]
    },

    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  };
  config.set(_config);
};
