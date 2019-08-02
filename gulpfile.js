const { src, dest } = require('gulp')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const babel = require('gulp-babel')

exports.default = function () {
    return src('src/*.js')
        // The gulp-uglify plugin won't update the filename
        .pipe(babel())
        .pipe(uglify())
        // So use gulp-rename to change the extension
        .pipe(rename({ extname: '.min.js' }))
        .pipe(dest('dist/'))
}