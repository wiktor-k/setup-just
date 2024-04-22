let script;
let args;

// https://github.com/casey/just/pull/1867/files#diff-b335630551682c19a781afebcf4d07bf978fb1f8ac04c6bf87428ed5106870f5R326
if (process.platform === 'win32') {
  script = 'choco';
  args = ['install', 'just'];
} else if (process.platform === 'darwin') {
  script = 'brew';
  args = ['install', 'just'];
} else if (process.platform === 'linux') {
  script = 'sudo';
  args = ['snap', 'install', '--edge', '--classic', 'just'];
} else {
  throw new Error(`Unsupported platform: ${process.platform}`);
}

require('child_process').spawn(script, args, {
  cwd: process.cwd(),
  detached: true,
  stdio: 'inherit',
});
