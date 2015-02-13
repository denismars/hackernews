module.exports = function (grunt) {
	grunt.registerTask('buildProd', [
        'webpack:build',
		'compileAssets',
		'concat',
		'uglify',
		'cssmin',
		'linkAssetsBuildProd',
		'clean:build',
		'copy:build'
	]);
};
