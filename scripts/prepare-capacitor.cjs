'use strict';

const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const webDir = path.join(root, 'www');

fs.rmSync(webDir, { recursive: true, force: true });
fs.mkdirSync(path.join(webDir, 'assets'), { recursive: true });
fs.copyFileSync(
  path.join(root, 'journal-de-trading.html'),
  path.join(webDir, 'index.html'),
);
fs.copyFileSync(
  path.join(root, 'assets', 'bookmap-trading-logo.png'),
  path.join(webDir, 'assets', 'bookmap-trading-logo.png'),
);

console.log('Préparation des fichiers web Capacitor terminée.');
