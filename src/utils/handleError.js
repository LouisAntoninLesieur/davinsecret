export function handleError(error) {
  console.error(error);
  return "Error generating secret. Please provide a number as an argument.";
}