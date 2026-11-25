import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const html = readFileSync(resolve(root, 'index.html'), 'utf8');
const main = readFileSync(resolve(root, 'src/main.js'), 'utf8');
const game = readFileSync(resolve(root, 'src/game.js'), 'utf8');

const ids = new Set([...html.matchAll(/\\bid="([^"]+)"/g)].map(m => m[1]));
const generatedCanvasId = 'game-canvas';
const referencedIds = new Set([...main.matchAll(/\\$\\('([^']+)'\\)/g)].map(m => m[1]));
referencedIds.delete(generatedCanvasId);
const missingIds = [...referencedIds].filter(id => !ids.has(id));
if (missingIds.length) {
  console.error('Missing HTML ids referenced by main.js:', missingIds.join(', '));
  process.exit(1);
}

const textureNames = [...new Set([...game.matchAll(/assets\\/textures\\/([a-z-]+)\\.svg/g)].map(m => m[1]))];
const missingTextures = textureNames.filter(name => !existsSync(resolve(root, 'assets/textures', name + '.svg')));
if (missingTextures.length) {
  console.error('Missing texture files:', missingTextures.join(', '));
  process.exit(1);
}

const heroCount = [...game.matchAll(/\\{id:'[a-z-]+',name:'/g)].length;
const itemCount = [...game.matchAll(/\\{id:'[a-z-]+',name:'[^']+',cost:/g)].length;
if (heroCount !== 23) {
  console.error('Expected 23 hero definitions, found', heroCount);
  process.exit(1);
}
if (itemCount < 12) {
  console.error('Expected at least 12 item definitions, found', itemCount);
  process.exit(1);
}
console.log('Project validation passed:', referencedIds.size, 'UI ids,', textureNames.length, 'textures,', heroCount, 'heroes,', itemCount, 'items.');
