var root = '/';
var config = {
    root : root,
    browser: 'google chrome',
    sourceMapsDir: 'source-maps',
    styles: {
        sassDir: 'src/sass',
        sassSrc: [
            'src/sass/**/*.scss'
        ],
        dest: 'src/css/'
    },
    javascript: {
        dir: 'src/js/',
        src: 'src/js/**/*.js',
        mainJs: 'src/js/main.js',
        dest: 'dest/js/'
    },
    templates: {
        src: 'src/html/**/*/html',
        dest: 'dest/'
    }

};

module.exports = config;
