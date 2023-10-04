# A2Z Port Coding Challenge

## Introduction
This JavaScript code is a solution to the A2Z Port Coding Challenge, which aims to find the longest word in a given sentence.

## Features
### 1. Modular Structure:
The code employs a modular structure with clear separation of concerns. Helper functions are utilized to enhance readability and maintainability, as well as reduce the need for code duplication.

### 2. Efficient Property Updates:
The algorithm efficiently tracks properties of the current word and the longest word encountered. It dynamically updates the longest word, considering both length and vowel count.

### 3. Input Validation:
The code includes input validation to ensure that only lowercase alphabetic characters are processed, disregarding non-alphabetic characters and spaces.

## Efficiency
### Time Complexity: O(n)
The code operates with a linear time complexity of O(n), where n is the length of the input sentence. The algorithm iterates through each character exactly once, performing constant-time operations for each character. This linear time complexity ensures efficient processing for sentences of varying lengths.

### Space Complexity: O(1)
The space complexity is constant O(1), as the memory usage remains constant regardless of the input size. The algorithm utilizes a fixed amount of memory to store the properties of the current and longest words, making it space-efficient.

## Example Usage

```
result = findLongestWord(
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"
);
console.log(result);  // Output: "experience"
```
The example usage demonstrates how to call the `findLongestWord` function with a sample sentence. The result is then printed to the console.

## Conclusion
This coding challenge solution provides an efficient and modular approach to finding the longest word in a sentence while considering specific conditions. The code is designed for clarity, making it easy to understand and maintain. The use of helper functions enhances code organization and readability. Overall, this solution is well-suited for scenarios where identifying the longest word based on certain criteria is required.