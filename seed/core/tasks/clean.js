module.exports = ($, gulp) => {
    'use strict'

    const deleteFiles = (files, cb) =>
        require('del')(files, {
            force: true
        }, cb)

    gulp.task('clean', (cb) => deleteFiles($.build.dir, cb))

    gulp.task('clean-dirs', (cb) =>
        deleteFiles([
            $.build.dir,
            $.dist.dir,
            $.reports.dir,
            $.tmp.dir,
            './node_modules'
        ], cb)
    )

    gulp.task('clean-plato', (cb) => deleteFiles($.reports.plato.dir, cb))
}