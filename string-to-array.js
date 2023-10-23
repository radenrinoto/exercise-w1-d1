function stringToArray(string) {
  // write your code here
  const arrays = [];
  const arrayOfWords = string.split(",");
  for (const word of arrayOfWords) {
    arrays.push(word.split(""));
  }

  return arrays;
}

console.log(stringToArray('aqrst,ukaei,ffooo'))
// [
//   [ 'a', 'q', 'r', 's', 't' ],
//   [ 'u', 'k', 'a', 'e', 'i' ],
//   [ 'f', 'f', 'o', 'o', 'o' ]
// ]

console.log(stringToArray('qwer,tyui,asdf,ghjk'))
// [
//   [ 'q', 'w', 'e', 'r' ],
//   [ 't', 'y', 'u', 'i' ],
//   [ 'a', 's', 'd', 'f' ],
//   [ 'g', 'h', 'j', 'k' ]
// ]