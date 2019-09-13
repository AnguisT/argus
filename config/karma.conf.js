var webpackConfig = require('./webpack.test.js');
module.exports=function(config) {
config.set({
    // конфигурация репортов о покрытии кода тестами
    coverageReporter: {
      dir:'tmp/coverage/',
      reporters: [
        { type:'html', subdir: 'report-html' },
        { type:'lcov', subdir: 'report-lcov' }
      ],
      instrumenterOptions: {
        istanbul: { noCompact:true }
      }
    },
    // spec файлы, условимся называть по маске **_*.spec.js_**
    files: [
        'src/**/*.spec.ts'
    ],
    frameworks: [ 'jasmine' ],
    // репортеры необходимы для  наглядного отображения результатов
    reporters: ['mocha', 'coverage', 'remap-coverage', 'html'],
    preprocessors: {
        'src/**/*.spec.ts': ['webpack', 'sourcemap']
    },
    browsers: [
      'Chrome'
    ],
    customLaunchers: {
      ChromeTravisCi: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    plugins: [
        'karma-jasmine',
        'karma-coverage',
        'karma-webpack',
        'karma-mocha-reporter',
        'karma-sourcemap-loader',
        'karma-chrome-launcher',
        'karma-html-reporter',
        'karma-remap-coverage',
    ],
    // передаем конфигурацию webpack
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo:true
    }
  });
};