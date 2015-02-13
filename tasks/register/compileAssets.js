module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
        'webpack:dev',
        'copy:vendors',
        'clean:dev',
        'less:dev',
        'copy:dev',
		'coffee:dev'
	]);
};
