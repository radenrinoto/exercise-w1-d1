'use strict'

let roster = [
  ['Number', 'Name', 'Position', 'Points per Game'],
  [12, 'Joe Schmo', 'Center', [14, 32, 7, 0, 23]],
  [9, 'Ms. Buckets', 'Point Guard', [19, 0, 11, 22, 0]],
  [31, 'Harvey Kay', 'Shooting Guard', [0, 30, 16, 0, 25]],
  [7, 'Sally Talls', 'Power Forward ', [18, 29, 26, 31, 19]],
  [22, 'MK DiBoux ', 'Small Forward ', [11, 0, 23, 17, 0]],
]

// convert to [{ "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }, ...]

function convert_roster_format(nestedArray) {
  // Mendapatkan header kolom dari array pertama
  const headers = nestedArray[0]

  let convertedArray = []

  // Mengonversi setiap baris data ke objek
  for (let i = 1; i < nestedArray.length; i++) {
    let obj = {}
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = nestedArray[i][j]
    }
    convertedArray.push(obj)
  }

  return convertedArray
}

let object_roster = convert_roster_format(roster)
console.log(object_roster[0])

// => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }

console.log(object_roster[0]['Name'] == 'Joe Schmo') // outputs true
module.exports = {
  convert_roster_format,
}
