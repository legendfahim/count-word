
# cwords

A simple npm package to count the number of words in a sentence.



## Installation
You can install the word-count package via npm:
```
npm install word-count
```
## Usage
```
const wordCount = require('word-count');

const sentence = "This is a sample sentence.";

const count = wordCount(sentence);

console.log(count); // Output: 5
```

## API
```
wordCount(sentence: string): number
sentence: The input sentence for which the word count is to be calculated.
Returns the number of words in the sentence.
```
## Example
```
const wordCount = require('word-count');

const sentence = "Hello, world! This is a test sentence.";

const count = wordCount(sentence);

console.log(count); // Output: 7
```
