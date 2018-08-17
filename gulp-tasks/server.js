var config = require('../config'),
    gulp = require('gulp'),
    browserSync = require('browser-sync');


gulp.task('server', function () {
    browserSync({
        browser: "chrome",
        port: 3030,
        server: {
            baseDir: "./src/",
            index: "index.html",
            directory: true
        }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

