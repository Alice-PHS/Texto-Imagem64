'use strict';

const build = require('@microsoft/sp-build-web');

build.addSuppression(`Segmentation fault: the read or write access was denied or the memory was corrupt.`);

build.initialize(require('gulp'));