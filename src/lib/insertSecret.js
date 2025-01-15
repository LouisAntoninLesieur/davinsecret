import { dotEnvChecker } from "../utils/dotenv-parser/dotEnvChecker.js";
import { generateSecret } from "../utils/secret-tools/generateRandomHex.js";
import { secretWriter } from "../utils/secret-tools/secretWriter.js";

export function insertSecret(bytes) {
  dotEnvChecker();
  const secret = generateSecret(bytes);
  return secretWriter(secret);
}