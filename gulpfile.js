var gulp = require('gulp');
var server = require('browser-sync').create();


gulp.task('server', function (cb) {
    server.init({
        ui: {
            port: 80
        },
        server: {
            baseDir: './',
            directory: true
        },
        open: 'ui',
        startPath: '/dist'
    }, cb);
});

gulp.task('default', ['server']);