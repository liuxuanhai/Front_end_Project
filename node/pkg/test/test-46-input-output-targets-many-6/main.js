#!/usr/bin/env node

'use strict';

const assert = require('assert');
const utils = require('../utils.js');

assert(!module.parent);
assert(__dirname === process.cwd());

const target = process.argv[2] || 'latest';
const input = './test-x-index.js';

const newcomers = [
  'test-output.exe-linux',
  'test-output.exe-macos',
  'test-output.exe-win.exe'
];

const before = utils.filesBefore(newcomers);

utils.pkg.sync([
  '--target', `${target}-linux,${target}-macos,${target}-win`,
  '--output', 'test-output.exe', input
]);

utils.filesAfter(before, newcomers);
