import { Command } from "commander";
import { insertSecret } from "../lib/insertSecret.js";

const program = new Command("davinsecret");

export function davinsecret() {
  program
    .command("secret <bytes>")
    .alias('s')
    .description('Create and record a JWT Secret to .env file')
    .action((bytes) => {
      const secret = insertSecret(Number(bytes));
    });

  program.parse(process.argv);
}