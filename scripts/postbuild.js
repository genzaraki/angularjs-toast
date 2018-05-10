/**
 * reads package.json file
 * add main field and remove few unwanted fields
 */
const fs = require('fs');

fs.readFile('dist/package.json', 'utf8', function (err, data) {

    if (err) throw err;

    const pkg = JSON.parse(data);
    pkg['main'] = 'angularjs-toast.min.js';
    delete pkg['scripts'];
    delete pkg['devDependencies'];
    delete pkg['config'];

    fs.writeFile('dist/package.json', JSON.stringify((pkg), null, 2), 'utf8', function (err) {
        if (err) throw err;
        console.log('postbuild: package.json written');
    });

});
