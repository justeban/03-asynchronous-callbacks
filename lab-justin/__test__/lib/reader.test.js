'use strict';

jest.mock('fs');

const reader = require('../../lib/reader.js');

describe('File Reader Module', () => {
  
  it('When given a bad file, returns an error', () => {
    let path = `${__dirname}/../../data/bad.txt`;
    reader(path, (err, data) => {
      expect(err).toBeDefined();
    });
  });

});