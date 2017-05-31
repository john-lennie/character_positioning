
function positionLetters(str) {
  // remove spaces between strings
  var noSpaces = str.split(" ").join("").toLowerCase();
  // declare object variable to return
  var characterPositions = {};

  // get each character in string
  for(var i = 0; i < noSpaces.length; i++ ) {
    var char = noSpaces.charAt(i);
    var curr = characterPositions[char];

    if (curr === undefined) {
      characterPositions[char] = [i];
    } else {
      characterPositions[char].push(i);
    }

  }

  return characterPositions;
}

console.log(positionLetters("lighthouse in the house"));



