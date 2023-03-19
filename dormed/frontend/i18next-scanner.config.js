var fs = require('fs');
var chalk = require('chalk');

module.exports = {
    input: [
        'src/Regulamin.js',
        // Use ! to filter out files or directories
        '!app/**/*.spec.{js,jsx}',
        '!app/i18n/**',
        '!**/node_modules/**',
    ],
    output: './',
    options: {
        debug: true,
        func: {
            list: ['i18next.t', 'i18n.t', 't'],
            extensions: ['.js', '.jsx']
        },
        trans: {
            component: 'Trans',
            i18nKey: 'i18nKey',
            defaultsKey: 'defaults',
            extensions: ['.js', '.jsx'],
            fallbackKey: function(ns, value) {
                return value;
            },
            acorn: {
                ecmaVersion: 2020,
                sourceType: 'module', // defaults to 'module'
                // Check out https://github.com/acornjs/acorn/tree/master/acorn#interface for additional options
            }
        },
        lngs: ['en','uk', 'pl'],
        ns: 'translate',
        defaultLng: 'pl',
        defaultNs: 'translate',
        defaultValue: '__STRING_NOT_TRANSLATED__',
        resource: {
            loadPath: 'static/locales/{{lng}}/{{ns}}.json',
            savePath: 'static/locales/{{lng}}/{{ns}}.json',
            jsonIndent: 2,
            lineEnding: '\n'
        },
        nsSeparator: false, // namespace separator
        keySeparator: false, // key separator
        interpolation: {
            prefix: '{{',
            suffix: '}}'
        }
    },
    customHandler: {
        // Custom handler that adds t function around string
        // and returns it as the new value
        type: 'v3',
        matcher: (key) => true,
        handler: (key, options, ast) => {
          const { value } = ast.node;
    
          // Check if the string already has t function around it
          if (value.includes('t(') && value.includes(')')) {
            return value;
          }
    
          // Add t function around the string and return it
          return `t("${value}")`;
        },
      },

    transform: function customTransform(file, enc, done) {
        "use strict";
        const parser = this.parser;
        const content = fs.readFileSync(file.path, enc);
        let count = 0;

        parser.parseFuncFromString(content, { list: ['i18next._', 'i18next.__'] }, (key, options) => {
            parser.set(key, Object.assign({}, options, {
                nsSeparator: false,
                keySeparator: false
            }));
            ++count;
        });

        if (count > 0) {
            console.log(`i18next-scanner: count=${chalk.cyan(count)}, file=${chalk.yellow(JSON.stringify(file.relative))}`);
        }

        done();
    }
};