'use strict';

//this checks for the required gulp plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    cleanCss = require('gulp-clean-css'),
    flatmap = require('gulp-flatmap'),
    run =require('gulp-run-command').default,
    merge = require('merge-stream');

//definition of the sass task, compiles the scss in /css/scss
//and puts the compiles css in the same destination
gulp.task('sass', function () {
  return gulp.src('./css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

//definition of the watch task.
//if any file in the specified dir is changed,
//executes the 'sass' task
gulp.task('watch', function () {
  gulp.watch('./css/*.scss', gulp.series('sass'));
});


gulp.task('jekyll', run('jekyll serve --source dist --dest dist/_site'));

//Cleans(deletes) the distribution(/dist/) directory, 
gulp.task('clean', function(cb) {
   return del(['dist/**/*'],cb); // clean all except the git information
});

//copies fonts from the font-awesome dir
gulp.task('copy', function() {
  var fonts = gulp.src('./node_modules/font-awesome/fonts/**/*.{ttf,woff,eof,svg}*')
  .pipe(gulp.dest('./dist/fonts'));
  var includes = gulp.src('./_includes/*.html')
  .pipe(gulp.dest('./dist/_includes'));
  var blog = gulp.src('./_posts/*')
  .pipe(gulp.dest('./dist/_posts'));
  var html = gulp.src('./*.html')
  .pipe(gulp.dest('./dist/'));
  var js = gulp.src('./dist/_layouts/js/*')
  .pipe(gulp.dest('./dist/js/'));
  var css = gulp.src('./dist/_layouts/css/*')
  .pipe(gulp.dest('./dist/css/'));
  var icon = gulp.src('*.png')
  .pipe(gulp.dest('dist/'));
  var cname = gulp.src('CNAME')
  .pipe(gulp.dest('dist/'));

 return merge(fonts,includes,blog,html,css,js,icon,cname);
});

// Image compression
gulp.task('imagemin', function() {
   return gulp.src('img/**/*.{png,jpg,jpeg,gif}')
     .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
     .pipe(gulp.dest('dist/img'));
 });


//minimizes the css, js and html to one single file for easy and fast loading
gulp.task('usemin', function() {
   return gulp.src('./_layouts/*.html')
   .pipe(flatmap(function(stream, file){
      return stream
   .pipe(usemin({
         css: [ rev() ],
         js: [ uglify(), rev() ],
         inlinejs: [ uglify() ],
         inlinecss: [ cleanCss(), 'concat' ]
      }))
   }))
   .pipe(gulp.dest('dist/_layouts/'))
});

gulp.task('build',gulp.series('clean', 'usemin',gulp.parallel('copy','imagemin')));
gulp.task('default',gulp.series('build', gulp.parallel('watch','jekyll')));