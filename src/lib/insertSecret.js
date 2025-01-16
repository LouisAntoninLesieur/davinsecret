import { dotEnvChecker } from "../utils/dotenv-parser/dotEnvChecker.js";
import { generateSecret } from "../utils/generate-secret-tools/generateRandomHex.js";
import { secretWriter } from "../utils/generate-secret-tools/secretWriter.js";
import { handleError } from "../utils/handleError.js";

export function insertSecret(bytes) {
  if (!bytes) {
    throw new Error(handleError("The type of the provided argument is not a number."));
  }

  try {
    dotEnvChecker();
    const secret = generateSecret(bytes);
    return secretWriter(secret);
  } catch (error) {
    return error;
  }
}