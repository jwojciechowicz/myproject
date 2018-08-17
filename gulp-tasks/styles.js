'use strict';

var config = require('../config'),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    notify = require("gulp-notify"),
    browserSync = require('browser-sync'),
    gcmq = require('gulp-group-css-media-queries'),
    plumber = require('gulp-plumber');

gulp.task('styles', function () {
    gulp.src(config.styles.sassSrc[0])
        .pipe(sourcemaps.init())
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(sass({
            includePaths: [
                'node_modules/susy/sass',
                'node_modules/breakpoint-sass/stylesheets/'
            ]
        }))
        .pipe(postcss([autoprefixer({browsers: ['last 2 versions', 'IE >= 9']})]))
        .pipe(gcmq())
        .pipe(sourcemaps.write(config.sourceMapsDir))
        .pipe(gulp.dest(config.styles.dest))
        .pipe(browserSync.stream());
});

