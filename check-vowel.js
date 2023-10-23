function checkVowel(string) {
  // write your code here

  const vowels = ['a','i','u','e','o']

  for ( i = 1 ; i < string.length; i++) {
    if (string.includes(vowels[i])) {
      return false 
    }
  }

  return true
}

console.log(checkVowel('alksk d'));
console.log(checkVowel('rabsnckksola'));
console.log(checkVowel('aiueoaiueoaiuoe'));
console.log(checkVowel('aaaaaaaaaaadaaaa'))