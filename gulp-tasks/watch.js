var config = require('../config'),
    gulp = require('gulp');

gulp.task('watch:sass', function () {
    gulp.watch(config.styles.sassSrc, ['styles']);
});

gulp.task('watch', ['watch:sass']);
