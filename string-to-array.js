function stringToArray(string) {
  const arrayOfString = string.split(",");
  let arr = [];
  arrayOfString.forEach((element) => {
    arr.push(element.split(""));
  });
  console.log(arr);
}

console.log(stringToArray("aqrst,ukaei,ffooo"));
// [
//   [ 'a', 'q', 'r', 's', 't' ],
//   [ 'u', 'k', 'a', 'e', 'i' ],
//   [ 'f', 'f', 'o', 'o', 'o' ]
// ]

console.log(stringToArray("qwer,tyui,asdf,ghjk"));
// [
//   [ 'q', 'w', 'e', 'r' ],
//   [ 't', 'y', 'u', 'i' ],
//   [ 'a', 's', 'd', 'f' ],
//   [ 'g', 'h', 'j', 'k' ]
// ]
