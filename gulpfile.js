const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

gulp.task('sass-compile', () => {
    return gulp.src('./src/public/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/public/css/'))
})

gulp.task('js-compile', () => {
    return gulp.src('./src/public/javaScript-compile/**/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./src/public/javaScript/'));
});

gulp.task('watch', () => {
    gulp.watch('./src/public/scss/**/*.scss', gulp.series('sass-compile'))
    gulp.watch('./src/public/javaScript-compile/**/*.js', gulp.series('js-compile'))
})