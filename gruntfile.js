module.exports = function(grunt) {

    grunt.initConfig({
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        sass: { 
            dist: {
                files: {
                    'app.css': 'app.scss',
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');


    grunt.registerTask('default', ['uglify', 'grunt-contrib-sass']);


};
