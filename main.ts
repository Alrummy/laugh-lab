const fs = require('fs');
const path = require('path');

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
// Absurdist deadpan: a mundane gross-out punchline delivered in a calm, essayistic voice.
const text = 'It looked like a dust bunny that had given up, so I did what any of us would do: I ate the evidence.';

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), text + '\n');