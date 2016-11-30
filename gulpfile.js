let gulp = require('gulp');

let webpackStream = require('webpack-stream');
let webpack = require('webpack');
let server = require('browser-sync').create();
// let del = require('del');

let config = require('./config');

gulp.task('webpack', function () {
  return gulp.src('./src/main.js')
    .pipe(webpackStream(config.webpack, webpack))
    .pipe(gulp.dest('./dist/'))
    .pipe(server.stream());
});

gulp.task('watch', function () {
  gulp.watch(['./src/**/*.js', './src/**/*.vue'], ['webpack']);
});

gulp.task('server', ['webpack', 'watch'], function (cb) {
  server.init(config.browserSync, cb);
});

gulp.task('default', ['server']);