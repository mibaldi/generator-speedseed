module.exports = ($) => {
    'use strict'

    $.gulp.task('build', (cb) => $.runSequence('clean', 'js', ['css', 'html', 'copy'], 'templateCache', cb))
    // $.gulp.task('compiledMin', (cb) => $.runSequence('scripts', ['styles-dist', 'jade-dist', 'copy'], 'copyDeploy', 'templateCache-dist', 'distTask', cb))

    // $.gulp.task('analize', (cb) => $.runSequence('compiledBase', 'analysis', cb))
    $.gulp.task('run', (cb) => $.runSequence('build', 'minified', 'webserver', 'watch', cb))
    // $.gulp.task('test', (cb) => $.runSequence('build', 'js-test', 'karma', 'watch', cb))

    $.gulp.task('dist', (cb) => {
        $.config.dist = true

        $.config.css.min = false
        $.config.html.min = false

        for (let prop in $.deploy) {
            let value = $.deploy[prop].replace('_deploy-dev', '_deploy-min')

            $.deploy[prop] = value
        }

        $.runSequence('run', cb)
    })
}