/* File: gulpfile.js */

var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    del = require('del'),
    sourcemaps = require('gulp-sourcemaps');


var paths = {
    /* Source paths */
    styles: ['assets/sass/main.scss'],
    scripts: [
        'assets/bower_components/jquery/dist/jquery.js',
        'assets/bower_components/jquery.easing/js/jquery.easing.js',
        'assets/bower_components/bootstrap/dist/js/bootstrap.js',
        'assets/js/grayscale.js'
    ],
    images: ['assets/images/**/*'],
    fonts: [
        'assets/bower_components/bootstrap/fonts/*',
        'assets/bower_components/font-awesome/fonts/*'
    ],

    /* Output paths */
    stylesOutput: '../static/stylesheets',
    scriptsOutput: '../static/javascripts',
    imagesOutput: '../static/images',
    fontsOutput: '../static/fonts'
};


gulp.task('default', ['watch']);

gulp.task('styles', function() {
    return sass(paths.styles,{ sourcemap: true, style: 'expanded' })
        .pipe(gulp.dest(paths.stylesOutput))
		.pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.stylesOutput))
        .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('watch', function() {
  gulp.watch('assets/sass/**/*.scss', ['styles']);
});
