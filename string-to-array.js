function stringToArray(string) {
  // write your code here
  let arr = []
  let splitWord = string.split(",")
  for (let i = 0; i < splitWord.length; i++) {
    const element = splitWord[i];
    const result = element.split("")
    arr.push(result)
  }
  return arr
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