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
Commands:
---------
command: secret | s
use    : davinsecret secret <bytes> | s <bytes> : Create and record a JWT Secret to your .env file (or create one if it doesn't exist)
example: davinsecret secret 32
note   : <bytes> MUST BE a number.
---------
command: doc | d
use    : davinsecret doc | d : Open the documentation
note   : no arguments needed.
--------------------------
That's it! Enjoy using Davin's secret generator. 🎉
    `
  )
}