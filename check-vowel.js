function checkVowel(string) {
  // write your code here
  const vocalWord = ["a", "i", "u", "e", "o"];

  const validateString = string.toLowerCase();

  for (const char of validateString) {
    if (!vocalWord.includes(char)) {
      return false;
    }
  }
  return true;
}

console.log(checkVowel("alksk d"));
console.log(checkVowel("rabsnckksola"));
console.log(checkVowel("aiueoaiueoaiuoe"));
console.log(checkVowel("aaaaaaaaaaadaaaa"));
