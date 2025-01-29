import fs from 'fs';
import path from 'path';

export function packageJsonChecker() {
  const packageJsonPath = path.resolve(process.cwd(), 'package.json');

  if (!packageJsonPath) { console.log('❌ No package.json file was found') }

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  return packageJson;
}