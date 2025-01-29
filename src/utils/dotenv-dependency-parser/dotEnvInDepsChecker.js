export function dotEnvInDepsChecker(packageJson) {
  const dependencies = packageJson.dependencies || {};

  if (dependencies.hasOwnProperty('dotenv')) {
    console.log('✅ dotenv dependency already exists into package.json. Run `npm i` to install / update all dependencies.');
  } else {
    console.log('💡 davin advices you to run the following command : npm i dotenv');
  }
}