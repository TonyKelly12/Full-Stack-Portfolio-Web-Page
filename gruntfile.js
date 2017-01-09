module.exports = function(grunt){

    //Configure task(s)
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify:{
            build: {
                src: 'frameworks/js/*.js',
                dest: 'run/js-min/script.min.js'
            },
            dev:{
                options:{
                    beautify: true,
                    mangle: false,
                    compress: false,
                    preserveComments: 'all'
                },
                src: 'frameworks/js/*.js',
                dest: 'run/js-min/script.min.js'
            }

        },
        watch: {
            js: {
                files: ['frameworks/js/*.js'],
                tasks: ['uglify:dev']
            }
        }
    });

    //Load Plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //Register Task(s)
    grunt.registerTask('default', ['uglify:dev']);
    grunt.registerTask('build', ['uglify:build']);
};