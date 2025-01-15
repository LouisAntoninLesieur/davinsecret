import fs from 'fs';
import path from 'path';
import { dotEnvCreator } from './dotEnvCreator.js';
import { dotEnvFound } from '../messages/dotEnvFound.js';
import { dotEnvNotFound } from '../messages/dotEnvNotFound.js';

export function dotEnvChecker() {
  const envFilePath = path.join(process.cwd(), '.env');
  if (!fs.existsSync(envFilePath)) {
    dotEnvNotFound();
    dotEnvCreator();
  } else {
    dotEnvFound();
  }
}