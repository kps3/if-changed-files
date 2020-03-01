#!/usr/bin/env node

const path = require('path');
const minimist = require('minimist');
const ifChangedFiles = require('../lib/if-changed-files');

const cwd = process.cwd();
const [root] = process.argv.slice(2);

ifChangedFiles(root)
  .then((changed) => {
    process.exit(changed ? 0 : 1);
  });
