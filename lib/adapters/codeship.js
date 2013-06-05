"use strict";

module.exports = {
  build: function (building, processEnv) {
    building.jobId = processEnv.CI_BUILD_NUMBER;
    building.serviceName = processEnv.CI_NAME;
    building.serviceJobId = processEnv.COMMIT_ID;
    return building;
  }
};

