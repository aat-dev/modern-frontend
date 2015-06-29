/**
 *
 * GRUNT.JS CONFIG v.1.0
 *
 * This is task runner config for various tools include JS & CSS testing
 * and frontend builds...
 *
 * @author Mark Rushton
 *
 * @see http://gruntjs.com
 *
 *
 */

var currentStylefile = "";

module.exports = function (grunt) {

  // Grunt Setup...
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),


    compass: {                  // Task
      dist: {                   // Target
        options: {              // Target options
          environment: 'dev',
          config: 'config.rb'
        }
      }
    }, // end compass

    bless: {
      css: {
        options: {
          //cacheBuster: false,
          compress: true
        },
        files: {
          'css/main.css': 'css/main.css'
        }
      }
    }, // end bless


    karma: {
      unit: {
        configFile: 'karma.conf.js',
        runnerPort: 9999,
        singleRun: true,
        browsers: ['PhantomJS'],
        logLevel: 'ERROR',
        background: true
      }
    }, // end Karma

    casperjs: {
      options: {
        async: {
          parallel: false
        }
      },
      //files: ['tests/visual/*.js']
      files: ['tests/tools/PhantomCSS/demo/*.js']
    }, // end CasperJS


    yslow: {
      options: {
        thresholds: {
          weight: 180,
          speed: 1000,
          score: 80,
          requests: 3
        }
      },
      pages: {
        files: [
          {
            src: 'http://www.aat.org.uk'
          }

        ]
      }
    },

    phantomcss: {
      desktop: {
        options: {
          screenshots: 'test/visual/desktop/',
          results: 'results/visual/desktop',
          viewportSize: [1024, 768]
        },
        src: [
          'test/visual/*.js'
        ]
      },
      mobile: {
        options: {
          screenshots: 'test/visual/mobile/',
          results: 'results/visual/mobile',
          viewportSize: [320, 480]
        },
        src: [
          'test/visual/*.js'
        ]
      }
    },

    jekyll: {
      options: {
        src: 'component-library'
      },
      dev: {
        options: {
          dest: 'component-library/docs',
          config: 'component-library/_config.yml'
        }
      }

    },

    // Continuously watch certain files and run tasks upon change
    watch: {
      css: {
        files: '**/*.scss',
        tasks: [
          'compass'
          //'bless'
        ]
      },
      jekyll: {
        files: ['component-library/**/*.html'],
        tasks: ['jekyll:dev']
      }
    } // end watch

  });

  // Load Grunt Plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
//  grunt.loadNpmTasks('grunt-bless');
//  grunt.loadNpmTasks('grunt-karma');
//  grunt.loadNpmTasks('grunt-casperjs');
//  grunt.loadNpmTasks('grunt-contrib-jasmine');
//  grunt.loadNpmTasks('grunt-yslow');
//  grunt.loadNpmTasks('grunt-phantomcss');
//  grunt.loadNpmTasks('grunt-jekyll');

  // Set Grunt Tasks to Run
  grunt.registerTask('default',
    [

      //'jekyll:dev',   // Component library to follow
      //'bless',        // Not needed currently
      //'karma',          // Will need to move to seperate test process from the builds
      //'casperjs',     // Will need to move to seperate test process from the builds
      //'yslow',        // This is not stable currently needs testing
      //'phantomcss',
      'compass',
      'watch'

    ]);


};
