let gulp = require('gulp');

let webpackStream = require('webpack-stream');
let webpack = require('webpack');
let server = require('browser-sync').create();
let del = require('del');


gulp.task('webpack', function () {
  return gulp.src('./src/main.js')
    .pipe(webpackStream(require('./webpack.config.js'), webpack))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('server', ['webpack'], function (cb) {
  server.init({
    ui: {
      port: 80
    },
    server: {
      baseDir: './',
      directory: true
    },
    open: false,
    startPath: '/dist'
  }, cb);
});

gulp.task('default', ['server']);