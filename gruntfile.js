/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    bowerInstall: {
      target: {
        src: [
          'app/index.html' // .html support...
        ],
        // Optional:
        // ---------
        cwd: '',
        dependencies: true,
        devDependencies: false,
        exclude: [],
        fileTypes: {},
        ignorePath: '',
        overrides: {}
      }
    },

    protractor: {
      options: {
        configFile: "test/protractor.conf.js", // Default config for protractor task
        keepAlive: true,
        noColor: false,
        args: {}
      },
      e2e: {
        options: {
          keepAlive: false
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      protractor: {
        files: ['app/scripts/**/*.js', 'test/e2e/*.js'],
        tasks: ['protractor:continuous']
      },
      files: ['app/**'],
      tasks: []
    },

    express: {
      all: {
        options: {
          port: 3000,
          hostname: 'localhost',
          bases: ['./app'],
          livereload: true
        }
      }
    },

    open: {
      all: {
        path: 'http://localhost:3000/index.html'
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-install');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-protractor-runner');

  // Default task.
  grunt.registerTask('default', ['bowerInstall', 'express', 'open', 'watch']);
  grunt.registerTask('test', ['bowerInstall', 'express', 'protractor:e2e']);
};
