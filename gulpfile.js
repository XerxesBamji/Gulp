var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var uglify = require('gulp-uglify');
var googleWebFonts = require('gulp-google-webfonts');

var options = { };

gulp.task('fonts', function () {
	return gulp.src('app/fonts/fonts.list')
		.pipe(googleWebFonts(options))
		.pipe(gulp.dest('app/fonts/out/'))
		;
	});

var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('sass', function() {
  return gulp.src('app/scss/styles.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(concat('styles.css'))
    .pipe(sass({outputStyle: 'compressed' }))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest('app/css'))
})

gulp.task('scripts', function() {
    return gulp.src('app/js/*.js')
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(gulp.dest('app/min-js'));
});

gulp.task('images', function() {
  return gulp.src('app/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest('app/min-img'));
});

gulp.task('watch', function() {
  gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('app/js/*.js', gulp.series('scripts'));
});

gulp.task("default", gulp.series("sass","images","scripts","watch"))
