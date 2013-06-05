"use strict";

var should = require('should');
require('log-driver')({level : false});
var module = require('../../lib/env');

describe ('Environment requirements', function () {
  it('should pass with a repo token', function () {
    module.processEnv = {
      COVERALLS_REPO_TOKEN: 'OK'
    };
    module.buildEnv.bind(undefined).should.not.throw();
  });
});

