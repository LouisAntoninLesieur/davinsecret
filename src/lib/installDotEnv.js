import { packageJsonChecker } from "../utils/dotenv-dependency-parser/packageJsonChecker.js";
import { dotEnvInDepsChecker } from "../utils/dotenv-dependency-parser/dotEnvInDepsChecker.js";

export function installDotEnv() {
  const packageJson = packageJsonChecker();
  dotEnvInDepsChecker(packageJson);
}