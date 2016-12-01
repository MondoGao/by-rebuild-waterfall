let gulp = require('gulp');

let webpackStream = require('webpack-stream');
let webpack = require('webpack');
let server = require('browser-sync').create();
// let del = require('del');
let sass = require('gulp-sass');

let config = require('./config');

// gulp.task('sass', function () {
//   return gulp.src('./src/**/*.scss')
//     .pipe(sass())
//     .pipe(gulp.dest('./src'))
//     .pipe(server.stream());
// })

gulp.task('webpack', function () {
  return gulp.src('./src/main.js')
    .pipe(webpackStream(config.webpack, webpack))
    .pipe(gulp.dest('./dist/'))
    .pipe(server.stream());
});

gulp.task('watch', function () {
  gulp.watch(['./src/**/*.js', './src/**/*.vue', './src/components/**/*', './src/App.*'], ['webpack']);
});

gulp.task('server', ['webpack', 'watch'], function (cb) {
  server.init(config.browserSync, cb);
});

gulp.task('default', ['server']);