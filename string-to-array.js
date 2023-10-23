function stringToArray(string) {
  let array = string.split(',')

  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].split('')
  }
  
  return array
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