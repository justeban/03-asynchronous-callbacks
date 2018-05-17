'use strict';

const fs = require('fs');

module.exports = exports = (path, callback) => {
  fs.readFile(path, (err, data) => {
    if (err) { callback(err); }
    else { callback(undefined, data.toString().trim()); }
  });
};