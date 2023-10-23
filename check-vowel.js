function checkVowel(string) {
  // write your code here

  for ( i = 1 ; i < string.length; i++) {
    if (string[i] == ['a'] || string[i] == ['i'] || string[i] == ['u'] || string[i] == ['e'] || string[i] == ['o']) {
      console.log(true)
    } else {
      console.log(false)
    }
  }
}

console.log(checkVowel('alksk d'));
console.log(checkVowel('rabsnckksola'));
console.log(checkVowel('aiueoaiueoaiuoe'));
console.log(checkVowel('aaaaaaaaaaadaaaa'))