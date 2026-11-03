// Copy only the official runtime modules and their declared dependency closure.
const fs = require('node:fs');
const path = require('node:path');
const {createRequire} = require('node:module');
const [sourceArg, destArg] = process.argv.slice(2);
const source = path.resolve(sourceArg), dest = path.resolve(destArg);
const modules = path.join(source, 'node_modules');
const todo = ['ws', 'tar', 'mime-types', '@vivo/adbkit'].map(name => [name, source]);
const seen = new Set();
fs.mkdirSync(dest, {recursive: true});
fs.copyFileSync(path.join(source, 'package.json'), path.join(dest, 'package.json'));
while (todo.length) {
  const [name, parent] = todo.pop();
  const pkgPath = createRequire(path.join(parent, 'package.json')).resolve(name + '/package.json');
  const dir = path.dirname(pkgPath), relative = path.relative(modules, dir);
  if (relative.startsWith('..') || path.isAbsolute(relative)) throw new Error(`Dependency outside official modules: ${name}`);
  if (seen.has(dir)) continue;
  seen.add(dir);
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  for (const dep of Object.keys(pkg.dependencies || {})) todo.push([dep, dir]);
  fs.cpSync(dir, path.join(dest, 'node_modules', relative), {recursive: true, dereference: false});
}
console.log(`Copied ${seen.size} official runtime packages`);
