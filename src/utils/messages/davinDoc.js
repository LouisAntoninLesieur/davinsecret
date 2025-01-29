export function davinDoc() {
  console.log(
    `
📚 \x1b[35m Davin's Documentation \x1b[0m 📚
--------------------------
Before all:
--------------------------
Thank you for using \x1b[35mDavin\x1b[0m's secret generator.

This tool is designed to create and record a JWT Secret to a .env file.

Do not owe a .env file yet ? No worries, this tool will create one for you.

Isn't dotenv installed yet ? Ask \x1b[35mDavin\x1b[0m, he tells you how to install.

Good to know : \x1b[35mDavin\x1b[0m generates a random JWT SECRET for you
without displaying it in the console. This is a great way to keep your secret... secret. 🤫
--------------------------
\x1b[42mCommands (when installed globally)\x1b[0m:
---------
command: secret | s
use    : davin secret <bytes> | s <bytes> : Create and record a JWT Secret to your .env file (or create one if it doesn't exist)
example: davin secret 32
note   : <bytes> MUST BE a number.
---------
command: dotenv | dot
use    : davin dotenv | davin dot : Check if dotenv depency already exist into package.json. If no package.json or dotenv dependency were find, \x1b[35mDavin\x1b[0m let's you know how to fix it
example: davin dotenv
---------
command: doc | d
use    : davin doc | d : Open the documentation
example: davin doc
note   : no arguments needed.
--------------------------
\x1b[42mCommands (when using npx)\x1b[0m:
---------
command: secret | s
use    : npx davinsecret s <bytes> | s <bytes> : Create and record a JWT Secret to your .env file (or create one if it doesn't exist)
example: npx davinsecret s 32
note   : <bytes> MUST BE a number.
---------
command: dotenv | dot
use    : npx davinsecret dotenv | davin dot : Check if dotenv depency already exist into package.json. If no package.json or dotenv dependency were find, \x1b[35mDavin\x1b[0m let's you know how to fix it
example: davin dotenv
---------
command: doc | d
use    : npx davinsecret doc | d : Open the documentation
example: npx davinsecret doc
note   : no arguments needed.
--------------------------
\x1b[42mCommands (when using npm)\x1b[0m:
---------
command: secret | s
use    : npm run davin s <bytes> | s <bytes> : Create and record a JWT Secret to your .env file (or create one if it doesn't exist)
example: npm run davin s 32
note   : <bytes> MUST BE a number.
note 2 : Make sure to add the following script to your package.json file :
        \x1b[96m"scripts"\x1b[0m: \x1b[35m{\x1b[0m
          \x1b[96m"davin"\x1b[0m: \x1b[91m"davinsecret"\x1b[0m
        \x1b[35m}\x1b[0m
---------
command: dotenv | dot
use    : npm run davin dotenv | dot : Check if dotenv depency already exist into package.json. If no package.json or dotenv dependency were find, \x1b[35mDavin\x1b[0m let's you know how to fix it
example: npm run davin dotenv
---------
command: doc | d
use    : npm run davin doc | d : Open the documentation
example: npm run davin doc
note   : no arguments needed.
--------------------------
That's it! Enjoy using Davin's secret generator. 🎉
    `
  )
}