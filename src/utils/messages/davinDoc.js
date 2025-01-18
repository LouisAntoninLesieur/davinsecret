export function davinDoc() {
  console.log(
    `
📚 Davin's Documentation 📚
--------------------------
Before all:
--------------------------
Thank you for using Davin's secret generator.

This tool is designed to create and record a JWT Secret to a .env file.

Do not owe a .env file yet ? No worries, this tool will create one for you.

What's great about this tool is that it generates a random value for you
without displaying it in the console. This is a great way to keep your
secret... secret. 🤫
--------------------------
Commands (installed globally): :
---------
command: secret | s
use    : davin secret <bytes> | s <bytes> : Create and record a JWT Secret to your .env file (or create one if it doesn't exist)
example: davin secret 32
note   : <bytes> MUST BE a number.
---------
command: doc | d
use    : davin doc | d : Open the documentation
example: davin doc
note   : no arguments needed.
--------------------------
Commands (using npx):
---------
command: secret | s
use    : npx davinsecret s <bytes> | s <bytes> : Create and record a JWT Secret to your .env file (or create one if it doesn't exist)
example: npx davinsecret s 32
note   : <bytes> MUST BE a number.
---------
command: doc | d
use    : npx davinsecret doc | d : Open the documentation
example: npx davinsecret doc
note   : no arguments needed.
--------------------------
Commands (using npm scripts):
---------
command: secret | s
use    : npm run davin s <bytes> | s <bytes> : Create and record a JWT Secret to your .env file (or create one if it doesn't exist)
example: npm run davin s 32
note   : <bytes> MUST BE a number.
note 2 : Make sure to add the following script to your package.json file :
        script: {
          "davin": "davinsecret"
        }
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