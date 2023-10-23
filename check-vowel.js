function checkVowel(string) {
  // write your code here
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (const letter of string) {
    if (!vowels.includes(letter)) {
      return false;
    } 
  }

  return true;
}

console.log(checkVowel('alksk d'));
console.log(checkVowel('rabsnckksola'));
console.log(checkVowel('aiueoaiueoaiuoe'));
console.log(checkVowel('aaaaaaaaaaadaaaa'))