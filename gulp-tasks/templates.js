var gulp = require('gulp'),
    router = require('front-router'),
    angularTemplateCache = require('gulp-angular-templatecache');

gulp.task('copy:templates', function () {
    return gulp.src('./src/html/**/*.html')
        .pipe(router({
            path: './src/js/utils/routes.js',
            root: './src/'
        }))
        .pipe(gulp.dest('./dest/html'))
});

gulp.task('cache:templates', function () {
    return gulp.src('./dest/html/**/*.html')
        .pipe(angularTemplateCache({
            root: '../html/'
        }))
        .pipe(gulp.dest('./dest/js'));
});
