function checkVowel(string) {
  // write your code here
  string = string.toLowerCase();
  let notVowelsCount = 0;
  const vowels = ["a", "i", "u", "e", "o"];
  for (i = 0; i < string.length; i++) {
    if (!vowels.includes(string[i])) {
      notVowelsCount++;
    }
  }
  const result = notVowelsCount > 0 ? console.log(false) : console.log(true);
  return result;
}

console.log(checkVowel("alksk d"));
console.log(checkVowel("rabsnckksola"));
console.log(checkVowel("aiueoaiueoaiuoe"));
console.log(checkVowel("aaaaaaaaaaadaaaa"));
