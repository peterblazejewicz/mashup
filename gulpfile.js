'use strict';
/*global require */
var gulp = require('gulp'),
  less = require('gulp-less'),
  autoprefixer = require('gulp-autoprefixer'),
  minifyCss = require('gulp-minify-css'),
  notify = require('gulp-notify'),
  util = require('gulp-util'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');
  
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
