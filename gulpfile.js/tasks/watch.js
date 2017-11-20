const gulp = require('gulp');
const gutil = require('gulp-util');
const gulpSequence = require('gulp-sequence');
const notifier = require('node-notifier');
const _ = require('lodash');

// load config
const config = require('../config');

const task = () => {
    _.forEach(config.watch, function (v) {

        // remove './' from glob
        // workaround for https://github.com/shama/gaze/issues/167
        let glob = _.map(config[Object.keys(v)].watchFiles, (w) => _.trimStart(w, './'));

        // init watch task
        gulp.watch(glob, {
            cwd: process.cwd() + '/' // workaround
        }, () => {
            gulpSequence.apply(null, v[Object.keys(v)])((err) => {
            });
        });
    });

    // log info about frontend demo


    // throw notification
    notifier.notify({
        title: 'ROOOAAAARRRRRR!',
        message: 'GO GO GO!',
        
        sound: 'Purr',
        contentImage: __dirname + '/../assets/trex.png'
    });
};

gulp.task('watch', task);
module.exports = task;