function checkVowel(string) {
  const vowels = 'aeiouAEIOU'; // Termasuk huruf besar dan kecil

    for(let i = 0; i<string.length; i++){
    //lakukan perulangan, jika ada yang bukan huruf vokal maka dia akan lansung di return, tapi kalau seluruhnya huruf vokal maka dia akan masuk
    //ke kode selanjutnya
      if (vowels.indexOf(string[i]) === -1) {
        return false; // Ada karakter yang bukan huruf vokal, maka kembalikan false
      }
    }

    return string.length > 0; 
}



console.log(checkVowel('alksk d'));
console.log(checkVowel('rabsnckksola'));
console.log(checkVowel('aiueoaiueoaiuoe'));
console.log(checkVowel('aaaaaaaaaaadaaaa'))