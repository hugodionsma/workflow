var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function (){
  return gulp.src('src/scss/app.scss')
    .pipe(sass({ouputStyle: 'expanded'}))
    .pipe(gulp.dest('app/css'));
});

gulp.task('default', ['sass']);
