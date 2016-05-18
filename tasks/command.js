/*
* grunt-command
* https://github.com/edwardcasbon/grunt-command
*
* Copyright (c) 2016 Edward Casbon
* Licensed under the MIT license.
*/

'use strict';

module.exports = function(grunt) {

    // Multi task for running terminal commands.
    grunt.registerMultiTask('command', 'Run terminal commands from Grunt', function() {
        var exec = require('child_process').exec;
        var cb = this.async();

        exec('sh -c "' + this.data.command + '"', function(err, stdout, stderr) {
            grunt.log.writeln(stdout);
            if('' !== stderr) {
                grunt.fail.warn(stderr);
            }
            cb();
        });
    });

    // Register the default task.
    grunt.registerTask('default', 'command');
};
