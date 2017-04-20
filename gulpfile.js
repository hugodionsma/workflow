var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var watch = require('gulp-watch');


var reload = browserSync.reload;

var SOURCEPATHS ={

  sassSource : 'src/scss/*.scss'

}

var APPPATH = {
  root: 'app/',
  css : 'app/css',
  js : 'app/js'
}

gulp.task('sass', function (){
  return gulp.src(SOURCEPATHS.sassSource)
    .pipe(sass({ouputStyle: 'expanded'}))
    .pipe(gulp.dest(APPPATH.css));
});

gulp.task('serve', ['sass'], function(){
  browserSync.init([APPPATH.css + '/*.css', APPPATH.root + '/*.html', APPPATH.js + '/*.js'], {

    server: {
      baseDir : APPPATH.root
    }
  })

});

gulp.task('watch', ['serve'], function(){
  gulp.watch([SOURCEPATHS.sassSource], ['sass']);

});

gulp.task('default', ['watch']);
