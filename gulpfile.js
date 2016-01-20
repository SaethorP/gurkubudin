'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(['./*.html','./*.js']).on('change',browserSync.reload);
    gulp.watch(['./*.scss'],['sass']);

});

// or...
/*
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "yourlocal.dev"
    });
});*/

gulp.task('inspect',function() {
	return gulp.src(['./*.js'])
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

gulp.task('sass', function() {
    gulp.src('./*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
});

gulp.task('default',['inspect','sass','browser-sync']);