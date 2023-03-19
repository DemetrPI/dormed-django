const fs = require('fs');
const path = require('path');
const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;

let counter = 0;

function customHandlerFunction(text, options, filename) {
  const ast = parse(text, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript']
  });

  traverse(ast, {
    StringLiteral(path) {
      const key = `Regulamin${counter++}`;
      const value = path.node.value;
      const tNode = parse(`t('${value}')`).program.body[0].expression;
      const propertyNode = parse(`Property.init('${key}', ${generate(tNode).code})`).program.body[0].expression;
      path.replaceWith(propertyNode);
    }
  });

  const output = generate(ast, {}, text);
  const filePath = path.join(options.outputPath, filename);

  fs.writeFileSync(filePath, output.code);
}

module.exports = customHandlerFunction;


i18next-scanner --config i18next-scanner.config.js --custom-handlers ./customHandlerFunction.js --output-file ./translations/en/translation.json src/Regulamin.js
