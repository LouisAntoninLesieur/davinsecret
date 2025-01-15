import fs from 'fs';
import path from 'path';

export function dotEnvCreator() {
  const envFilePath = path.join(process.cwd(), '.env');
  fs.writeFileSync(envFilePath, '# This .env file was generated using DavinSecret NPM package, thanks for using it :)\n');
}