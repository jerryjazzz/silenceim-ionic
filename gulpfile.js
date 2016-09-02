/*
     _____     __
    / ___/_ __/ /__
   / (_ / // / / _ \
   \___/\_,_/_/ .__/
             /_/
*/

const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const minifyCss = require('gulp-minify-css');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const wrap = require('gulp-wrap');

gulp.task('default', ['sass', 'js']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(minifyCss({ keepSpecialComments: 0 }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('js', function(done) {
  const wrapper = `
;(function() {
  <%= contents %>
})();
`;

  gulp.src('js/**/*.js')
    .pipe(babel())
    .pipe(wrap(wrapper))
    .pipe(concat('app.js'))
    .pipe(uglify())
    .on('error', console.error.bind(console))
    .pipe(gulp.dest('./www/js/'))
    .on('end', done);
});

gulp.task('watch', ['default'], function() {
  gulp.watch(['./scss/**/*.scss'], ['sass']);
  gulp.watch(['./js/**/*.js'], ['js']);
});
