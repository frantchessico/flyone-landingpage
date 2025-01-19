import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}




export function generateImprovedLinkRandomKey(keyLength) {
  // Define the character set
  let possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  // If custom characters are provided, include them in the set
 
  // Initialize an empty string to store the generated key
  let generatedKey = "";

  // Loop to generate each character of the key
  for (let i = 0; i < keyLength; i++) {
    // Generate a random index within the character set
    const randomIndex = Math.floor(Math.random() * possibleCharacters.length);

    // Obtain the random character
    const randomCharacter = possibleCharacters[randomIndex];

    // Exclude visually similar characters (Il1, O0, 5S, 2Z)
    if (
      (randomCharacter === "I" && possibleCharacters.includes("l")) ||
      (randomCharacter === "l" && possibleCharacters.includes("I")) ||
      (randomCharacter === "O" && possibleCharacters.includes("0")) ||
      (randomCharacter === "0" && possibleCharacters.includes("O")) ||
      (randomCharacter === "5" && possibleCharacters.includes("S")) ||
      (randomCharacter === "S" && possibleCharacters.includes("5")) ||
      (randomCharacter === "2" && possibleCharacters.includes("Z")) ||
      (randomCharacter === "Z" && possibleCharacters.includes("2"))
    ) {
      // Regenerate the character if it's visually similar
      i--;
      continue;
    }

    // Add the character to the key
    generatedKey += randomCharacter;
  }

  // Encode the generated key for URL usage
  return encodeURIComponent(generatedKey);
}
