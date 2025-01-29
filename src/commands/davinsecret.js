import { Command } from "commander";
import { insertSecret } from "../lib/insertSecret.js";
import { davinDoc } from "../utils/messages/davinDoc.js";
import { installDotEnv } from "../lib/installDotEnv.js";

const program = new Command("davinsecret");

export function davinsecret() {
  program
    .command("secret <bytes>")
    .alias('s')
    .description('Create and record a JWT Secret to .env file')
    .action((bytes) => {
      const secret = insertSecret(Number(bytes));
    });

  program
    .command('doc')
    .alias('d')
    .description('Open the documentation')
    .action(() => {
      davinDoc();
    });
    
  program
    .command('dotenv')
    .alias('dot')
    .description('Check dotenv dependency')
    .action(() => {
      installDotEnv();
    })


  program.parse(process.argv);
}