'use strict';

module.exports = {

  dist: {
    options: {
      sourceMap: true,
    },
    src: [
      '<%= paths.src %>/js/main.js'
    ],
    dest: '<%= paths.temp %>/js/main.js'
  }

};
