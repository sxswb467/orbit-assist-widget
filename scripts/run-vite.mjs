import { spawn } from 'node:child_process';
import { chmodSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const viteCli = path.join(repoRoot, 'node_modules', 'vite', 'bin', 'vite.js');
const esbuildRoot = path.join(repoRoot, 'node_modules', '@esbuild');

function findEsbuildBinary() {
  for (const entry of readdirSync(esbuildRoot)) {
    const candidate = path.join(esbuildRoot, entry, 'bin', 'esbuild');
    try {
      statSync(candidate);
      return candidate;
    } catch {
      continue;
    }
  }
  throw new Error(`Unable to find esbuild binary under ${esbuildRoot}`);
}

const esbuildBinary = findEsbuildBinary();
const originalMode = statSync(esbuildBinary).mode;
chmodSync(esbuildBinary, 0o755);

const child = spawn(process.execPath, [viteCli, ...process.argv.slice(2)], {
  cwd: repoRoot,
  stdio: 'inherit',
  env: process.env,
});

function restoreMode() {
  try {
    chmodSync(esbuildBinary, originalMode);
  } catch {
    // Best effort cleanup for a tracked dependency binary.
  }
}

child.on('exit', (code, signal) => {
  restoreMode();
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 0);
});

child.on('error', (error) => {
  restoreMode();
  console.error(error);
  process.exit(1);
});

for (const eventName of ['SIGINT', 'SIGTERM']) {
  process.on(eventName, () => {
    child.kill(eventName);
  });
}
