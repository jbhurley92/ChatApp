// var gulpfile.js
// gulp.task('html, function() {
// });


 //gulpfiles
  //add a gulp plugin 
  //find it online (on npm)
  //npm install plugin
  //require it
  //dd it to the right pipelines
var gulp = require('gulp');
var htmlhint = require('gulp-htmlhint');

gulp.task('default', ['html', 'css']);


gulp.task('html', function(){
          
  return gulp.src('./*.html')
    .pipe (htmlhint())
//    .pipe (htmlhint())
    .pipe(htmlhint.failReporter())
  //make sure all HTML is valid
    .pipe(gulp.dest('public/'));
    

          });

var uglify = require('gulp-uglify');
 
gulp.task('compress', function() {
  return gulp.src('lib/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

var gulp = require('gulp');
var jslint = require('gulp-jslint');
 
gulp.task('default', function () {
    return gulp.src(['source.js'])
        .pipe(jslint({
            node: true,
            evil: true,
            nomen: true,
 
            global: [],
            predef: [],
            
            reporter: 'default',
         
            edition: '2014-07-08',
 
             
            errorsOnly: false
        }))
 
      
        .on('error', function (error) {
            console.error(String(error));
        });
});