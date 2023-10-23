function stringToArray(string) {
  // write your code here
  const str = string.split(',');
  // console.log(str);
  const arr = str.map((str2) => str2.split(''));
  return arr;
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