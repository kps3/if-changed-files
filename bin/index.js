#!/usr/bin/env node

const path = require('path');
const minimist = require('minimist');
const ifChangedFiles = require('../lib/if-changed-files');

const cwd = process.cwd();
const argv = minimist(process.argv.slice(2));
const root = argv.root;

ifChangedFiles(root)
  .then((changed) => {
    process.exit(changed ? 0 : 1);
  });
