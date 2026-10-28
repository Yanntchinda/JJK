'use strict';

const fs = require('node:fs');
const path = require('node:path');
const pngToIco = require('png-to-ico');

const logo = path.join(__dirname, '..', 'assets', 'bookmap-trading-logo.png');
const icon = path.join(__dirname, '..', 'assets', 'bookmap-trading.ico');

pngToIco(logo)
  .then((buffer) => fs.writeFileSync(icon, buffer))
  .catch((error) => {
    console.error('Impossible de générer l’icône Windows à partir du logo :', error);
    process.exitCode = 1;
  });
