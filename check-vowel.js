function checkVowel(string) {
  // write your code here
  string = string.toLowerCase()
  let vowels = 'aiueo';
  for (let i = 0; i < string.length; i++) {
    if (vowels.indexOf(string[i]) === -1) {
      return false;
    }
  }
  return true;
}

console.log(checkVowel('alksk d'));
console.log(checkVowel('rabsnckksola'));
console.log(checkVowel('aiueoaiueoaiuoE'));
console.log(checkVowel('Aaaaaaaaaaadaaaa'))