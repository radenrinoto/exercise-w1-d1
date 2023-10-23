function checkVowel(string) {
  const VOWELS = 'aeiouAEIOU';

  for (const char of string) {
    if (!VOWELS.includes(char)) {
      return false;
    }
  }

  return true;
}

console.log(checkVowel('alksk d'));
console.log(checkVowel('rabsnckksola'));
console.log(checkVowel('aiueoaiueoaiuoe'));
console.log(checkVowel('aaaaaadaaaaaa'));
console.log(checkVowel('aAeAuO'));
