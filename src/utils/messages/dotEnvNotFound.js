export function dotEnvNotFound() {
  console.log(
    `
🔍 File .env not found.\n 
🏭 Creating .env file.\n 
✅ .env created.\n 
🎁 JWT_SECRET variable and its random value were added to .env.
    `
  );
}