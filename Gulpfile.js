/**
 * Created by Meki on 2015.02.25..
 */

/* Get dependencies */
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

/* Set paths */

var paths = {
    /* Source paths */
    styles: ['assets/sass/main.scss'],
    scripts: [
        'assets/bower_components/jquery/dist/jquery.js',
        'assets/bower_components/jquery.easing/js/jquery.easing.js',
        'assets/bower_components/bootstrap/dist/js/bootstrap.js',
        'assets/js/tiphereth.js'
    ],
    images: ['assets/images/**/*'],
    fonts: [
        'assets/bower_components/bootstrap/fonts/*',
        'assets/bower_components/font-awesome/fonts/*'
    ],

    /* Output paths */
    stylesOutput: 'static/stylesheets',
    scriptsOutput: 'static/javascripts',
    imagesOutput: '.static/images',
    fontsOutput: 'static/fonts'
};

/* Tasks */
gulp.task('styles', function() {
    return sass(paths.styles,{sourcemap: true, style: 'expanded' })
        .pipe(gulp.dest(paths.stylesOutput))
		.pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.stylesOutput))
        .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('scripts', function() {
    return gulp.src(paths.scripts)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest(paths.scriptsOutput))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest(paths.scriptsOutput))
        .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('images', function() {
    return gulp.src(paths.images)
        .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
        .pipe(gulp.dest(paths.imagesOutput))
        .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('fonts', function() {
    return gulp.src(paths.fonts)
    .pipe(gulp.dest(paths.fontsOutput))
    .pipe(notify({ message: 'Fonts task complete', onLast: true }));
});

gulp.task('clean', function(cb) {
    del([paths.stylesOutput, paths.scriptsOutput], cb)
});

gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts', 'images', 'fonts');
});