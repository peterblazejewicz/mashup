'use strict';
/*global require */
var gulp = require('gulp'),
  less = require('gulp-less'),
  autoprefixer = require('gulp-autoprefixer'),
  minifyCss = require('gulp-minify-css'),
  notify = require('gulp-notify'),
  util = require('gulp-util');
  
gulp.task('less', function() {
  return gulp.src(['assets/styles/mashup-theme.less'])
    .pipe(less({
      compress: false
    }))
    .on('error', util.log)
    .pipe(autoprefixer('ie9'))
//    .pipe(minifyCss({keepBreaks: false}))
    .pipe(gulp.dest('dist/css'))
    .pipe(notify('Less compiled'));
});
