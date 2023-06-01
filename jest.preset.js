const nxPreset = require("@nx/jest/preset").default;

module.exports = {
  ...nxPreset,
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
  ],
};
