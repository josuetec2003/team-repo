const gulp = require('gulp')
const sass = require('gulp-sass')
const nodemon = require('gulp-nodemon')

gulp.task('sass', () => {
    gulp
	.src('scss/styles.scss')
	.pipe(sass())
	.pipe(gulp.dest('public/css/')
})

gulp.task('reload', () => {
    nodemon({
	script: 'server.js'
    })
})

gulp.task('default', ['sass'])
