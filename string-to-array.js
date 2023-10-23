function stringToArray(string) {

  // write your code here
  const stringPop = string.split(",");
  let result = [];

  stringPop.forEach((item) => {
    const data = item.split(",");
    data.forEach((x) => {
      result.push(Array.from(x));
    });
  });

  return result;

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
