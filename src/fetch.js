const fs = require('fs');
fetch('https://oradeistorie.ro/spatiul-romanesc-intre-diplomatie-si-conflict-in-evul-mediu-si-la-inceputurile-modernitatii/')
  .then(r => r.text())
  .then(t => fs.writeFileSync('page.html', t));
