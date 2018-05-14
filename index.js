
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 4; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array
}

function johnLennonFacts(array) {
  let n = 0
  while (array) {
    n++;
    array[n] + '!!!';
  }
  return array
}

