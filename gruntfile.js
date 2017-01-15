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
        sass: {
            dev:{
                options:{
                    outputStyle: 'expanded'
                },
                files:{
                    'run/css/stles.css' : 'frameworks/Scss/main.scss'
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
        watch: {
            js: {
                files: ['frameworks/js/*.js'],
                tasks: ['uglify:dev']
            },
            css:{
                files: ['frameworks/scss/**/*.scss'],
                task: ['sass:dev']
            }
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
    //Register Task(s)
    grunt.registerTask('default', ['uglify:dev', 'sass:dev']);
    grunt.registerTask('build', ['uglify:build', 'sass:build']);
};