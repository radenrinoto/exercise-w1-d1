function checkVowel(string) {
  const VOWELS = 'aeiouAEIOU';
  const result = [];

  for (const char of string) {
    if (VOWELS.includes(char)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}

console.log(checkVowel('alksk d'));
console.log(checkVowel('rabsnckksola'));
console.log(checkVowel('aiueoaiueoaiuoe'));
console.log(checkVowel('aaaaaaaaaaadaaaa'));
console.log(checkVowel('aASDSAuO'));
