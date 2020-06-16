'use strict';

//this checks for the required gulp plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    del = require('del'),
    browserSync = require('browser-sync'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    cleanCss = require('gulp-clean-css'),
    flatmap = require('gulp-flatmap'),
    htmlmin = require('gulp-htmlmin');

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

//browser sync task
gulp.task('browser-sync', function () {
   var files = [
      './*.html',
      './css/*.css',
      './img/*.{png,jpg,gif}',
      './js/*.js'
   ];
   //specifies dir of files to serve up, and the files.
   browserSync.init(files, {
      server: {
         baseDir: "./"
      }
   });

});

// Default task, is executed when we type 'gulp' to the terminal
gulp.task('default', gulp.parallel('browser-sync', gulp.series('watch')));

//Cleans(deletes) the distribution(/dist/) directory, 
gulp.task('clean', function(cb) {
   return del(['dist/**/*'],cb); // clean all except the git information
});

//copies fonts from the font-awesome dir
gulp.task('copyfonts', function() {
 return gulp.src('./node_modules/font-awesome/fonts/**/*.{ttf,woff,eof,svg}*')
 .pipe(gulp.dest('./dist/fonts'));
});

//copies blog
gulp.task('copyfonts', function() {
   return gulp.src('./blog')
   .pipe(gulp.dest('./dist/blog'));
  });

// Image compression
gulp.task('imagemin', function() {
   return gulp.src('img/**/*.{png,jpg,gif}')
     .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
     .pipe(gulp.dest('dist/img'));
 });


//minimizes the css, js and html to one single file for easy and fast loading
gulp.task('usemin', function() {
   return gulp.src('./*.html')
   .pipe(flatmap(function(stream, file){
      return stream
   .pipe(usemin({
         css: [ rev() ],
         html: [ function() { return htmlmin({ collapseWhitespace: true })} ],
         js: [ uglify(), rev() ],
         inlinejs: [ uglify() ],
         inlinecss: [ cleanCss(), 'concat' ]
      }))
   }))
   .pipe(gulp.dest('dist/'));
});
 
gulp.task('build',gulp.series('clean', gulp.parallel('copyfonts','imagemin','usemin')));     //add copyfonts to this once you use fonts