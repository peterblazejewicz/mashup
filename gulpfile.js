'use strict';
/*global require */
var gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  concat = require('gulp-concat'),
  less = require('gulp-less'),
  minifyCss = require('gulp-minify-css'),
  notify = require('gulp-notify'),
  uglify = require('gulp-uglify'),
  util = require('gulp-util');
  
gulp.task('less', function() {
  return gulp.src(['assets/styles/mashup-theme.less'])
    .pipe(less({
      compress: false
    }))
    .on('error', util.log)
    .pipe(autoprefixer('ie9'))
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/css'))
    .pipe(notify('Less compiled'));
});

gulp.task('compress', function() {
  return gulp.src(['assets/js/transition.js', 'assets/js/modal.js', 'assets/js/bootbox.js'])
    .pipe(concat('mashup.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});
