module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      compass: {
        dev: {
          options: {
            // config: '../compass/config.rb',
            sassDir:'sass',
            cssDir:'../css',
            imagesDir:'../images',
            // expanded
            outputStyle: 'compressed',
            sourcemap:true,
            relativeAssets:true
            // noLineComments:true
          }
        },
        specify:{
          options: {
            sassDir:'sass',
            cssDir:'../',
            imagesDir:'../images',
            outputStyle: 'compressed',
            specify: 'sass/style.scss',
            sourcemap:true,
            relativeAssets:true
          }
        }
      },
      requirejs: {
        index:{
          options: {
            baseUrl: '../js/modules',
            name: 'index',
            out: '../js/modules/index.js'
          }
        }
      },
      uglify:{
        '../js/libs/jquery.min.js':'libs/jquery/jquery.js',
        '../js/libs/jquery_lazyload.min.js':'libs/jquery_lazyload/jquery_lazyload.js',
        '../js/libs/requirejs.min.js':'libs/requirejs/requirejs.js',
        '../js/libs/zepto.min.js':'libs/zepto/zepto.js'
      },
      copy:{
        images:{
          src:'images/*.png',
          dest:'../images/icons.png'
        }
      },
      bower: {
        install: {
          options: {
            targetDir: 'libs',
            // layout: function(type, component, source) {
            //   var newpath = '';
            //   return path.join(newpath);
            // },
            layout: 'byComponent',
            install: true,
            verbose: false,
            cleanTargetDir: false,
            cleanBowerDir: false
          }
        }
      },
      connect: {
        options: {
            // port: 8000,
            // protocol: 'http',
            hostname: "10.60.108.49",
            // hostname: "127.0.0.1",
            // base: ".",
            // open: false,
            livereload: 8080
        }
      },
      watch: {
        sass: {
          files: ['../sass/*.scss','sass/*.scss'],
          tasks: ['compass']
        },
        html: {
          files: ['../*.php'],
          options: {
            livereload: true
          }
        },
        css:{
          files:['../css/*.css','../*.css'],
          options: {
            livereload: true
          }
        },
        js:{
          files:['../js/**/*.js'],
          options: {
            livereload: true
          }
        },
        image:{
          files: ['../../images/icons/*'],
          tasks: ['compass']
        }
      }
    });
    // grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-sass');
    // grunt.loadNpmTasks('grunt-contrib-copy');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-compass');
    // grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['connect','compass','watch']);
}