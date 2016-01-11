Skip to content
This repository
Search
Pull requests
Issues
Gist
 @cpachomski
 Watch 0
  Star 0
 Fork 0 cpachomski/empire-state
 Code  Issues 0  Pull requests 0  Wiki  Pulse  Graphs  Settings
Branch: master Find file Copy pathempire-state/gulpfile.js
21e597c  on Oct 28, 2015
@cpachomski cpachomski add skeleton and remove some files
1 contributor
RawBlameHistory     48 lines (40 sloc)  1.16 KB
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var reactify = require('reactify');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');
var rename = require('gulp-rename');



var paths = {
  scripts: ['js/src/**/*.js', 'js/src/**/*.jsx'],
  styles: ['css/scss/**/*.scss'],
  stylesDEST: './css',
  scriptsDEST: './js/dist'
}

gulp.task('watch', function(){
  gulp.watch(['js/src/**/*.js', 'js/src/**/*.jsx', 'css/scss/**/*.scss'], ['styles', 'scripts'])
});


gulp.task('scripts', function(){
  gulp.src(paths.scripts)
    .pipe(plumber())
    .pipe(browserify({
      transform: [reactify]
    }))
    .pipe(gulp.dest(paths.scriptsDEST))
});

gulp.task('styles', function(){
  gulp.src(paths.styles)
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: require('node-bourbon').includePaths
    }))
    .pipe(concat('styles.css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest(paths.stylesDEST))
    .pipe(livereload({start: true}));
});
