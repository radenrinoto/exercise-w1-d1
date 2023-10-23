function checkVowel(string) {
  // write your code here
  const vowels = 'aeiouAEIOU'; // Termasuk huruf besar dan kecil

    // for (let char of string) {
    //   //cek apakah character di string ada di dalam volwes, jika tidak ada maka dia akan return - 1
    //     if (vowels.indexOf(char) === -1) {
    //         return false; // Ada karakter yang bukan huruf vokal, maka kembalikan false
    //     }
    // }

    for(let i = 0; i<string.length; i++){
    //lakukan perulangan, jika ada yang bukan huruf vokal maka dia akan lansung di return, tapi kalau seluruhnya huruf vokal maka dia akan masuk
    //ke kode selanjutnya
      if (vowels.indexOf(string[i]) === -1) {
        return false; // Ada karakter yang bukan huruf vokal, maka kembalikan false
      }
    }

    return string.length > 0; 
}

// const vowels = 'aeiouAEIOU';

// console.log(vowels.indexOf('b'))
let string = "aiueoaiueoaiuo"

console.log(string.length);

// console.log(checkVowel('alksk d'));
// console.log(checkVowel('rabsnckksola'));
// console.log(checkVowel('aiueoaiueoaiuoe'));
// console.log(checkVowel('aaaaaaaaaaaaaaaa'))