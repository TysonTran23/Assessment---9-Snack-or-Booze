function unroll(squareArray) {
  let result = [];

  while (squareArray.length > 0) {
    //Traverse Top Row, then removes top row
    for (let element of squareArray[0]) {
      result.push(element);
    }
    squareArray.splice(0, 1);
    //Traverse Right Column, then removes right column
    if (squareArray.length > 0) {
      for (let i = 0; i < squareArray.length; i++) {
        result.push(squareArray[i].pop());
      }
    }

    //Traverse Bottom Row, then removes bottom row
    if (squareArray.length > 0) {
      const lastRow = squareArray[squareArray.length - 1];
      for (let i = lastRow.length - 1; i >= 0; i--) {
        result.push(lastRow[i]);
      }
      squareArray.splice(squareArray.length - 1, 1);
    }

    //Traverse Left Column, then removes left column
    if (squareArray.length > 0) {
      for (let i = 0; i < squareArray.length; i++) {
        result.push(squareArray[i].shift());
      }
    }
  }
  return result;
}

module.exports = unroll;
