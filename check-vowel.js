function checkVowel(string) {
  // write your code here
  string = string.toLowerCase()
  const vowel = ['a', 'i', 'u', 'e', 'o']
  for (let i = 0; i < string.length; i++) {
    if (!vowel.includes(string[i])) {
      return false
    }
  }

  return true
}

console.log(checkVowel('alksk d'));
console.log(checkVowel('rabsnckksola'))
console.log(checkVowel('aiueoaiueoaiuoe'));
console.log(checkVowel('aaaaaaaaaaadaaaa'))