/**
 * Build App files and folders.
 *
 * ---------------------------------------------------------------
 *
 * This grunt task is configured to pack all the client application files for deployment
 * on the client.
 *
 * For usage docs see:
 *      https://github.com/webpack/grunt-webpack
 */
module.exports = function(grunt) {

    grunt.config.set('webpack', {
        dev: {
            entry: "./clients/web/main.js",
            output: {
                path: "./assets/js/build",
                filename: "build.js"
            },
            stats: {
                // Configure the console output
                colors: false,
                modules: false,
                reasons: false
            },
            progress: false,
            failOnError: true,
            devtool: "#source-map",
            module: {
                loaders: [
                    { test: /\.vue$/, loader: "vue" },
                ]
            }
        }
    });

    grunt.registerTask('webpack', [
        'webpack:dev'
    ]);

    grunt.loadNpmTasks('grunt-webpack');
};
