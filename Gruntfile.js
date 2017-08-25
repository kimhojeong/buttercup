module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
        oliveD: {
            options: {
              paths: ['assets/css'],
              compress:false
            },
            files: {
              // 'assets/css/olivestyle.min.css': 'assets/lesso/import.less',
              'assets/css/olivestyle.dev.css': 'assets/lesso/import.less'
            },
        },
        shinhai: {
              options: {
                paths: ['assets/css'],
                dumpLineNumbers:"comments"
              },
              files: {
                // 'assets/css/shinhaistyle.min.css': 'assets/lesshai/import.less',
                'assets/css/shinhaistyle.dev.css': 'assets/lesshai/import.less'
              },
        }
     },
     serve: {
         options: {
             port: 9000
         }
     },
     includes: { //복수로 여러개
     dist:{
         cwd:'html', //current working directory 현재경로
         src:['*.html','includes/*.html'], //대상파일들
         dest:'./dist', //destination 만들어진 파일이 들어갈 경로. 목적지
         options:{
             flatten:true,
             includePath:'html/includes/' //Indicates the path(s) to use when looking for included files.포함된 파일들 찾을때 사용할 경로.
         }
     }
   },
   watch: {
      scripts: {
          files: ['assets/lesso/*.less','assets/lesshai/*.less'],
          tasks: ['less'],
          options: {
            spawn: false,
          },
      },
      includes: {
          files: ['html/**/*.html'],
          tasks: ['includes'],
          options: {
              spawn: false,
          },
      },
    },



  });

  // Load the plugin
grunt.loadNpmTasks('grunt-serve');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-includes');
grunt.loadNpmTasks('grunt-contrib-watch');


// Default task(s).
grunt.registerTask('default', ['serve']);

}
