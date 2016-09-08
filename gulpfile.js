/**
 * Created by dipiash on 08.09.2016.
 */

'use strict';

var gulp = require('gulp'),

    less = require('gulp-less'),
    LessPluginCleanCSS = require('less-plugin-clean-css'),
    cleancss = new LessPluginCleanCSS({advanced: true}),
    csso = require('gulp-csso'),
    autopefixer = require('gulp-autoprefixer'),

    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),

    clean = require('gulp-clean'),
    plumber = require('gulp-plumber');

var path = { // config for paths
    source: {
        less: 'content/site.less',
        js: 'scripts/app.js'
    },
    build: {
        js: 'scripts/',
        css: 'content/'
    }
};

gulp.task('watch', function () { // watch task
    gulp.watch(path.source.less, function () {
        gulp.start('less:build:production');
    });

    gulp.watch(path.source.js, function () {
        gulp.start('js:build:production');
    });
});

gulp.task('less:build:production', function () {
    return gulp.src(path.source.less)
        .pipe(plumber())
        .pipe(less({
            plugins: [cleancss]
        }))
        .pipe(concat('site.css'))
        .pipe(autopefixer())
        .pipe(csso())
        .pipe(gulp.dest(path.build.css));
});

gulp.task('js:build:production', function () {
    return gulp.src(path.source.js)
        .pipe(plumber())
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.build.js));
});

gulp.task('build:production', function () {
    gulp.start([
        'less:build:production',
        'js:build:production'
    ]);
});