const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('sass', () => {
    gulp
	.src('scss/styles.scss')
	.pipe(sass())
	.pipe(gulp.dest('public/css/')
})

gulp.task('default', ['sass'])
