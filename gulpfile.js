const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass-compile', () => {
    return gulp.src('./src/public/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/public/css/'))
})

gulp.task('watch', () => {
    gulp.watch('./src/public/scss/**/*.scss', gulp.series('sass-compile'))
})