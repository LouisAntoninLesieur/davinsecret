import fs from 'fs';
import path from 'path';

export function secretWriter(secret) {
  
  if (!secret) {
    return "No secret provided";
  }

  const envFilePath = path.join(process.cwd(), '.env');
  fs.appendFileSync(envFilePath, `\nJWT_SECRET=${secret}`);
}