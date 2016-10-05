var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');
var minifyCSS = require('gulp-minify-css');
var streamqueue  = require('streamqueue');


var paths = {
    scripts: ['assets/js/*.js'],
    css: ['assets/css/*.css']
};

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use all packages available on npm
gulp.task('clean', function(cb) {
    // You can use multiple globbing patterns as you would with `gulp.src`
    del(['assets/build'], cb);
});

gulp.task('scripts', function() {
    // Minify and copy all JavaScript
    return streamqueue({objectMode: true},
        gulp.src('assets/js/prism.js'),
        gulp.src('assets/js/index.js'),
        gulp.src('assets/js/jquery.fitvids.js')
    )
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest('assets/build'));
});

gulp.task('minify-css', function() {
    return streamqueue({ objectMode: true },
        gulp.src('assets/css/normalize.css'),
        gulp.src('assets/css/main.css'),
        gulp.src('assets/css/prism.css')
    )
        .pipe(minifyCSS())
        .pipe(concat('all.min.css'))
        .pipe(gulp.dest('assets/build'))
        .once('end', function(){
            console.log('✓ Done!');
            process.exit();
        });
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.css, ['minify-css']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'scripts', 'minify-css']);
