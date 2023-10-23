function checkVowel(string) {
  // write your code here
  let status = true;
  [...string].forEach((val) => {
    if (
      val.toLowerCase() != "a" &&
      val.toLowerCase() != "i" &&
      val.toLowerCase() != "u" &&
      val.toLowerCase() != "e" &&
      val.toLowerCase() != "o"
    ) {
      status = false;
    }
  });
  return status;
}

console.log(checkVowel("alksk d"));
console.log(checkVowel("rabsnckksola"));
console.log(checkVowel("aiueoaiueoaiuoe"));
console.log(checkVowel("aaaaaaaaaaadaaaa"));
