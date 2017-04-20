var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');


var reload = browserSync.reload;

var SOURCEPATHS ={

  sassSource : 'src/scss/*.scss',
  htmlSource : 'src/*html'

}

var APPPATH = {
  root: 'app/',
  css : 'app/css',
  js : 'app/js'
}

gulp.task('sass', function (){
  return gulp.src(SOURCEPATHS.sassSource)
    .pipe(autoprefixer({ browsers: ['IE 6','Chrome 9', 'Firefox 14']}))
    .pipe(sass({ouputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest(APPPATH.css));
});

gulp.task('copy', function() {
  gulp.src(SOURCEPATHS.htmlSource)
    .pipe(gulp.dest(APPPATH.root))
});

gulp.task('serve', ['sass'], function(){
  browserSync.init([APPPATH.css + '/*.css', APPPATH.root + '/*.html', APPPATH.js + '/*.js'], {

    server: {
      baseDir : APPPATH.root
    }
  })

});



gulp.task('watch', ['serve', 'sass', 'copy'], function(){
  gulp.watch([SOURCEPATHS.sassSource], ['sass']);
  gulp.watch([SOURCEPATHS.htmlSource], ['copy']);


});

gulp.task('default', ['watch']);
