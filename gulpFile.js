// gulp start
const gulp = require('gulp')
// Minify image
const imagemin = import('gulp-imagemin')
// Minify JavaScript File
const uglify = require('gulp-uglify');
const pipeline = require('readable-stream').pipeline;



// print Msg
gulp.task('msg', async function(){
    return  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
})
//  copy html files to dist
gulp.task('copyhtml',async ()=>{
    gulp.src('./src/*')
    .pipe(gulp.dest('./dist'))
})
// Minify image
gulp.task('image',()=>{
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