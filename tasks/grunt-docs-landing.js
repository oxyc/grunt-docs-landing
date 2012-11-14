/*globals module:true */
module.exports = function (grunt) {
  "use strict";

  var path = require('path');

  grunt.registerTask('docs', 'Generate a documentation landing page', function() {
    var options = this.options()
      , docs = grunt.config(['docs', 'sections'])
      , cb = this.async()
      , sections = [];

    Object.keys(docs).forEach(function(section) {
      var files = grunt.file.expandFiles(docs[section]);
      files = files.map(function(filepath) {
        return {
          name: path.basename(filepath, '.html'),
          path: '/' + filepath
        };
      });
      sections.push({ heading: section + ' documentation', files: files });
    });

    var content = grunt.template.process(grunt.file.read(options.template), {
      sections: sections
    });

    grunt.log.writeln('Writing documentation landing page at ' + options.out);
    grunt.file.write(options.out, content);
  });
};
