// gulp start
const gulp = require('gulp')

// Minify image
const imagemin = import('gulp-imagemin')

// Minify JavaScript File
const uglify = require('gulp-uglify');
const pipeline = require('readable-stream').pipeline;

// Compile Sass file to Css
const sass = require('gulp-sass')(require('sass'));

// Css Minify
const cleanCSS = require('gulp-clean-css');

// gulp file rename
const rename = require("gulp-rename");



// print Msg
gulp.task('msg', async function () {
    return console.log("aa");
})

//  copy html files to dist
gulp.task('copyhtml', async () => {
    gulp.src('./src/*')
        .pipe(gulp.dest('./dist'))
})

// Minify image
gulp.task('image', () => {
    gulp.src('./src/assets/img/men.jpg')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets'))
})

// Minify JavaScript File
gulp.task('compress', function (cb) {
    return pipeline(
        gulp.src('src/assets/js/*.js'),
        uglify(),
        gulp.dest('dist/assets/js'),
        cb
    );
});

// Compile Sass file to Css
gulp.task('compile-sass', async function () {
    gulp.src('./src/assets/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/assets/css'))
})

// Css Minify
gulp.task('minify-css', () => {
    return gulp.src('./src/assets/css/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        //   rename file
        .pipe(rename('style-min.css'))
        .pipe(gulp.dest('dist/assets/css'));
});
