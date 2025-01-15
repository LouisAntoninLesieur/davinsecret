import { Command } from "commander";

const program = new Command("davinsecret");

export function davinsecret() {
  program
    .command("davin <bytes>")
    .description('Create and record a JWT Secret to .env file')
    .action((bytes) => {
      console.log(`davin ${bytes}`);
    }
  );

  program.parse(process.argv);
}