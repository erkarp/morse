module.exports = function(grunt) {

	grunt.config.init({
    karma: {
		  unit: {
		    options: {
		      frameworks: ['jasmine'],
		      singleRun: true,
		      browsers: ['PhantomJS'],
		      files: [
            'node_modules/jquery/dist/jquery.js',
		        'morseToggle.js',
						'morsetoggle.test.js'
		      ]
		    }
		  }
		}
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.registerTask('default', ['karma']);
};
