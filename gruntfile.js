module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            dist: {
                options: { sourcemap: 'none' },
                files: { 'www/app.css': 'app.scss' }
            }
        },
        cssmin: {
            target: {
                files: { 'www/app.css': ['www/app.css'] }
            }
        },
        autoprefixer: {
            options: { safe: true },
            single_file: {
                src: 'www/app.css',
                dest: 'www/app.css'
            },
        },
        uglify: {
            options: { mangle: false },
            my_target: {
                files: { 'www/app.js': ['app.js'] }
            }
        },
        copy: {
            main: {
                files: [
                    // includes files within path
                    { expand: true, src: ['index.html'], dest: 'www/', filter: 'isFile' },

                    // includes files within path and its sub-directories
                    { expand: true, src: ['resources/**'], dest: 'www/' },
                ],
            },
        },

        watch: {
            css: {
                files: ['app.scss'],
                tasks: ['sass', 'autoprefixer', 'cssmin'],
            },
            js: {
                files: ['app.js'],
                tasks: ['uglify'],
            },
        },
        serve: {
            options: {
                port: 9000,
                'serve': {
                    'path': 'www'
                },
                
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-serve');


    grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin', 'uglify', 'copy', 'watch']);

};
