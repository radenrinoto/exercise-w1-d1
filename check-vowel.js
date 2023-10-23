function checkVowel(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  string = string.toLowerCase()
  for (const char of string) {
    if (!vowels.includes(char)) {
      return false
    }
  }
  return true
}

console.log(checkVowel('alksk d')) // return false
console.log(checkVowel('rabsnckksola')) // return false
console.log(checkVowel('aiueoaiueoaiuoe')) // return true
console.log(checkVowel('aaaaaaaaaaadaaaa')) // return false
