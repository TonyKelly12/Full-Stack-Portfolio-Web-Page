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
                dest: 'run/js/script.min.js'
            }

        },
        sass: {
            dev:{
                options:{
                    outputStyle: 'expanded'
                },
                files:{
                    'run/css/styles.css' : 'frameworks/Scss/main.scss'
                }
            },
            build:{
                options:{
                    outputStyle: 'compressed'
                },
                files:{
                    'run/css/styles.css' : 'frameworks/scss/main.scss'
                }
            }
        },
        connect:{
            dev:{
                options:{
                    port:8080,
                    base:'run',
                    keepalive: false,
                    livereload: true
                }
            }
        },
            
        watch: {
            options:{
                livereload: true
            },
            js: {
                files: ['frameworks/js/*.js'],
                tasks: ['uglify: dev']
            },
            css:{
                files: ['frameworks/scss/**/*.scss'],
                tasks: ['sass:dev']
            },
        },
        responsive_images: {
    dev: {
      files: [{
        expand: true,
        src: ['app/img/**/*.{jpg,gif,png}'],
        cwd: 'src/',
        dest: 'dist/'
      }]
    }
  },
    });

    //Load Plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-connect');
    //Register Task(s)
    grunt.registerTask('default', ['uglify:dev', 'sass:dev']);
    grunt.registerTask('build', ['uglify:build', 'sass:build']);
    grunt.registerTask('serv', ['default','connect:dev', 'watch']);
};