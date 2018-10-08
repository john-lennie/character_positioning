const myArgs = process.argv.slice(2).join(' ');

function characterCount(string) {
  let output = {};
  let keyValue = [];
  for (let i = 0; i < myArgs.length; i++) {
    let key = myArgs[i];
    if (myArgs[i] !== ' ') {
      if (output.hasOwnProperty(myArgs[i])) {
        output[key].push(i);
      } else {
        output[key] = [i];
      }
    }
  }
  return output;
}

console.log(characterCount(myArgs));
