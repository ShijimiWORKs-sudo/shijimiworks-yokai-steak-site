import { access, cp, mkdir, readFile, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const root = new URL('../', import.meta.url);
const dist = new URL('../dist/', import.meta.url);
const files = [
  'index.html', 'portal.html', 'kyoutuuHPImage.png',
  'ShijimiWORKs HP Image.png', 'ShijimiWORKs HP Image02.png',
  'ShijimiWORKs HP Image03.png', '.nojekyll',
  'assets', 'shijimiworks', 'yokaisteak'
];

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const file of files) {
  const source = new URL(file, root);
  await access(source);
  await cp(source, new URL(file, dist), { recursive: true });
}

const html = await readFile(new URL('index.html', root), 'utf8');
const required = ['SERVICE', 'PROJECT', 'WORKS', 'BLOG', 'NEWS', 'ABOUT', 'CONTACT'];
const missing = required.filter(label => !html.includes(label));
if (missing.length) throw new Error(`Required sections missing: ${missing.join(', ')}`);

console.log(`Static build complete: ${join(dirname(new URL('index.html', dist).pathname), '')}`);
