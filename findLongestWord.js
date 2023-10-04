/* Assumptions and Constaints:
    -Input string contains only lowercase alphabetic characters
    -All characters that are non-alphabetic characters or spaces are ignored
    -If two words have the same length, the program should return the one with
    the greatest number of vowels
*/

/**
 *
 * @param {string} sentence - The input sentence containing only lowercase alphabetic characters.
 * @returns {string} - The longest word in the sentence.
 */

// Main function to find longest word in sentence
function findLongestWord(sentence) {
  // "Longest" properties:
  let longest = { word: "", length: 0, vowels: 0 };

  // "Current" properties:
  let current = { word: "", length: 0, vowels: 0 };

  // Helper functions to reduce code duplication:

  function updateLongestProperties() {
    // Updates longest word to current longest word, or to word with the most vowels if words have equal length.
    if (
      current.length > longest.length ||
      (current.length === longest.length && current.vowels > longest.vowels)
    ) {
      longest.word = current.word;
      longest.length = current.length;
      longest.vowels = current.vowels;
    }
  }

  function resetCurrentProperties() {
    // Resets current properties for use after a space is encountered.
    current.word = "";
    current.length = 0;
    current.vowels = 0;
  }

  for (const char of sentence) {
    // Iterate through every character in the input sentence.
    if (char.match(/[a-z]/)) {
      // If the character is is a alphabetic character, append the character to the current word and increment the current word length by one.
      current.word += char;
      current.length++;

      if (char.match(/[aeiou]/)) {
        // If the character is a vowel, increment the current vowel property by one.
        current.vowels++;
      }
    } else if (char === " ") {
      // If a space is encountered, update the longest properties and reset the current properties.
      updateLongestProperties();
      resetCurrentProperties();
    }
  }

  updateLongestProperties(); // Updates longest word aftern the loop exits in case longest word is last word in the sentence.

  return longest.word;
}

result = findLongestWord(
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"
);
console.log(result);
