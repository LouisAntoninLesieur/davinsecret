import crypto from "crypto";

export function generateSecret(bytes) {
  if (!bytes) {
    return "No bytes provided";
  }

  try {
  return crypto.randomBytes(bytes).toString("hex");
  } catch (error) {
    console.error(error);
    return "Error generating secret";
  }
}
