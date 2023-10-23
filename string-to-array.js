function stringToArray(string) {
// write your code here
  
  const stringArray = string.split(',')

  const resultArray = []

  for (let i=0 ; i < stringArray.length ; i++) {

    const str = stringArray[i]
    const charArray = []

    for (let j=0 ; j < str.length ; j++) {
      charArray.push(str.charAt(j))
    }
    resultArray.push(charArray)
  }

  return resultArray
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