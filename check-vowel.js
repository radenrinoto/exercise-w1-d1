function checkVowel(string) {
  // write your code here
  const vowels = ['a', 'i', 'u', 'e', 'o']
  for (const char of string.toLowerCase()) {
    // console.log(char);
    if (!vowels.includes(char)) {
      return false;
    }
  }
  return true
}

console.log(checkVowel('alksk d'));
console.log(checkVowel('rabsnckksola'));
console.log(checkVowel('aiueoaiueoaiuoe'));
console.log(checkVowel('aaaaaaaaaaadaaaa'))