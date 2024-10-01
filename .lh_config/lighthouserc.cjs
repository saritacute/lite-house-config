/* eslint-disable no-undef */

const url = 'http://localhost:5000/';
const startServerCommand = 'npm run preview';

const settings = {
  preset: 'desktop',
  chromeFlags: '--no-sandbox --headless',
  verbose: true,
  throttling: {
    rttMs: 40,
    throughputKbps: 10240,
    cpuSlowdownMultiplier: 1,
  },
};

const assert = {
  assertions: {
    'categories:performance': ['warn', { minScore: 0.7 }],
    'categories:accessibility': ['warn', { minScore: 0.7 }],
    'categories:best-practices': ['warn', { minScore: 0.7 }],
    'categories:seo': ['error', { minScore: 0.7 }],
  },
};

const upload = {
  target: 'filesystem',
  outputDir: `../lighthouse-results/${new Date().toISOString().replace(/[-:T]/g, '_')}`,
};

const collect = {
  url,
  numberOfRuns: 1,
  additive: false,
  settings,
  ...(startServerCommand && { startServerCommand }),
};

module.exports = {
  ci: {
    collect,
    assert,
    upload,
    server: {},
    wizard: {},
  },
};
