/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(grunt) {

    grunt.config.set('copy', {

        // ------- O P T I O N A L ------------
        vendors: {
            files: [

                // --- Dependencies Libraries - First Order ---

                { //Include jQuery into dependencies
                    expand: true,
                    cwd: 'node_modules/',
                    src: ['jquery/dist/jquery.js'],
                    dest: './assets/js/dependencies/',
                    flatten: true
                },

                {   //Include Underscore into dependencies
                    expand: true,
                    cwd: 'node_modules/',
                    src: ['underscore/underscore.js'],
                    dest: './assets/js/dependencies/',
                    flatten: true,
                },


                // --- Vendor Libraries - Second Order ---

                {   //Include Bootsrap js into vendors
                    expand: true,
                    cwd: 'node_modules/',
                    src: ['bootstrap/dist/js/bootstrap.js'],
                    dest: './assets/js/vendors/',
                    flatten: true,
                },

                {   //Include Bootsrap css/less into styles
                    expand: true,
                    cwd: 'node_modules/',
                    src: ['bootstrap/dist/css/**.*'],
                    dest: './assets/styles/',
                    flatten: true,
                },

                {   //Include Bootsrap fonts into fonts
                    expand: true,
                    cwd: 'node_modules/',
                    src: ['bootstrap/dist/fonts/**.*'],
                    dest: './assets/fonts/',
                    flatten: true,
                }

                //  Notes:      These are commented out as they are not needed for this
                //              Hackernews demos site, but for other projects you may
                //              want to incoporate some of these here.

            ]
        },




        // ------- R E Q U I R E D ------------
        dev: {
            files: [

                {   // Copy all the /assets over to ./tmp public for viewing in Development
                    expand: true,
                    cwd: './assets',
                    src: ['**/*.!(coffee|less)'],
                    dest: '.tmp/public'
                }
            ]
        },
        build: {
            files: [

                {   //Copy everythign from .tmp/public to www for serving in Producting
                    expand: true,
                    cwd: '.tmp/public',
                    src: ['**/*'],
                    dest: 'www'
                }
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
};
