function checkVowel(string) {
  if (string.includes('a') && string.includes('e') && string.includes('i') && string.includes('o') && string.includes('u')) {
    return true
  }
  return false
}

console.log(checkVowel('alksk d'));
console.log(checkVowel('rabsnckksola'));
console.log(checkVowel('aiueoaiueoaiuoe'));
console.log(checkVowel('aaaaaaaaaaadaaaa'))