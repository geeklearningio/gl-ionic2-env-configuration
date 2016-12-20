/**
 * Created by Vidailhet on 19/12/16.
 */

var fs = require('fs');

for (var i = 0; i < process.argv.length; i++) {
    if (process.argv[i] === '--env') {
        if (process.argv[i + 1]) {
            jsonConfigurationFile = process.argv[i + 1] + '.json';
        }
    }
}

var rd = fs.createReadStream('src/env-configuration/' + jsonConfigurationFile)
var wd = fs.createWriteStream('www/env-configuration.json');
rd.on('error', handleError);
wd.on('error', handleError);

function handleError(err) {
    rd.destroy();
    wd.end();
    console.error('There was an error while copying the environmemt configuration file:');
    console.error(err);
}

rd.pipe(wd);
