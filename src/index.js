function wordCount(sentence) {
  // Check if the sentence contains any word characters
  if (!/\w/.test(sentence)) {
    return 0;
  }

  let newSentence = sentence
    .replace(/\.(?=\s|$)/g, " ")
    .replace(/[.,/#!$%^&*;:{}=\-\\_`~()"']/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ");
  return newSentence.length;
}

module.exports = wordCount;
