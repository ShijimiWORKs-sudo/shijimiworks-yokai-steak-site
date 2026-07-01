import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const root = new URL('../', import.meta.url).pathname.replace(/^\/(?:[A-Za-z]:)/, value => value.slice(1));
const port = Number(process.env.PORT || 4173);
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.jpeg': 'image/jpeg', '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml' };

http.createServer(async (request, response) => {
  try {
    const requested = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const relative = normalize(requested === '/' ? 'index.html' : requested.replace(/^\/+/, ''));
    if (relative.includes('..')) throw new Error('Invalid path');
    const file = join(root, relative);
    response.writeHead(200, { 'Content-Type': mime[extname(file)] || 'application/octet-stream', 'X-Content-Type-Options': 'nosniff' });
    response.end(await readFile(file));
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found');
  }
}).listen(port, '127.0.0.1', () => console.log(`ShijimiWORKS: http://127.0.0.1:${port}`));
