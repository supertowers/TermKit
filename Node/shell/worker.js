require('app-module-path').addPath('.');
require('app-module-path').addPath('..');
require('app-module-path').addPath(__dirname);
require('app-module-path').addPath(__dirname + '/..');

var processor = require('processor');

// Change to home directory.
process.chdir(process.env.HOME);

// Set up processor.
var p = new processor.processor(process.openStdin(), process.stdout);
