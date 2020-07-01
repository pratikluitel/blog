'use strict';

//this checks for the required gulp plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    del = require('del'),
    //browserSync = require('browser-sync'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    cleanCss = require('gulp-clean-css'),
    flatmap = require('gulp-flatmap'),
    htmlmin = require('gulp-htmlmin'),
    //exec = require('gulp-exec'),
    run =require('gulp-run-command').default;

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

//browser sync task

// Default task, is executed when we type 'gulp' to the terminal
//gulp.task('default', gulp.parallel(gulp.series('watch')));

//Cleans(deletes) the distribution(/dist/) directory, 
gulp.task('clean', function(cb) {
   return del(['dist/**/*'],cb); // clean all except the git information
});

//copies fonts from the font-awesome dir
gulp.task('copyfonts', function() {
 return gulp.src('./node_modules/font-awesome/fonts/**/*.{ttf,woff,eof,svg}*')
 .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('copyblog', 
  function(){
   return gulp.src('./_posts/*')
   .pipe(gulp.dest('./dist/_posts'));
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
         html: [ htmlmin() ],
         js: [ uglify(), rev() ],
         inlinejs: [ uglify() ],
         inlinecss: [ cleanCss(), 'concat' ]
      }))
   }))
   .pipe(gulp.dest('dist/_layouts/'))
});

//shell commands
gulp.task('copyy', 
  function(){
   return gulp.src('./dist/_layouts/css/*')
   .pipe(gulp.dest('./dist/css/'));
  });

gulp.task('copyyy', 
  function(){
   return gulp.src('./dist/_layouts/js/*')
   .pipe(gulp.dest('./dist/js/'));
  });

  gulp.task('copytemp', function(){
     return gulp.src('./*.html')
     .pipe(gulp.dest('./dist/'));
  })
  gulp.task('copyicon', function(){
    return gulp.src('*.png')
    .pipe(gulp.dest('dist/'));
  })

gulp.task('build',gulp.series('clean', gulp.parallel('copyfonts','copyblog','copytemp','imagemin','usemin'), 'copyy','copyyy','copyicon'));
gulp.task('default',gulp.series('build', gulp.parallel('watch','jekyll')));