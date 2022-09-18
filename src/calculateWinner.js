export function calculateWinner(squares, size) {
  if (size === 3) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [indA, indB, indC] = lines[i];
      if (squares[indA] && squares[indA] === squares[indB] && squares[indB] === squares[indC]) {
        return squares[indA];
      }
    }
    return null;
  } 
  if (size === 5) {
    const lines = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24],
      [0, 5, 10, 15, 20],
      [1, 6, 11, 16, 21],
      [2, 7, 12, 17, 22],
      [3, 8, 13, 18, 23],
      [4, 9, 14, 19, 24],
      [0, 6, 12, 18, 24],
      [4, 8, 12, 16, 20]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [indA, indB, indC, indD, indE] = lines[i];
      if (squares[indA] && squares[indA] === squares[indB] && squares[indB] === squares[indC] && squares[indC] === squares[indD] && squares[indD] === squares[indE]) {
        return squares[indA];
      }
    }
    return null;
  }
  if (size === 10) {
    const lines = [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
      [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
      [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
      [50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
      [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
      [70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
      [80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
      [90, 91, 92, 93, 94, 95, 96, 97, 98, 99],
      [0, 10, 20, 30, 40, 50, 60, 0, 80, 90],
      [1, 11, 21, 31, 41, 51, 61, 71, 81, 91],
      [2, 12, 22, 32, 42, 52, 62, 72, 82, 92],
      [3, 13, 23, 33, 43, 53, 63, 73, 83, 93],
      [4, 14, 24, 34, 44, 54, 64, 74, 84, 94],
      [5, 15, 25, 35, 45, 55, 65, 75, 85, 95],
      [6, 16, 26, 36, 46, 56, 66, 76, 86, 96],
      [7, 17, 27, 37, 47, 57, 67, 77, 87, 97],
      [8, 18, 28, 38, 48, 58, 68, 78, 88, 98],
      [9, 19, 29, 39, 49, 59, 69, 79, 89, 99],
      [0, 11, 22, 33, 44, 55, 66, 77, 88, 99],
      [9, 18, 27, 36, 45, 54, 63, 72, 81, 90],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [indA, indB, indC, indD, indE, indF, indG, indH, indK, indL] = lines[i];
      if (squares[indA] && squares[indA] === squares[indB] && squares[indB] === squares[indC] && squares[indC] === squares[indD] && squares[indD] === squares[indE]
        && squares[indE] === squares[indF] && squares[indF] === squares[indG] && squares[indG] === squares[indH] && squares[indH] === squares[indK] && squares[indK] === squares[indL]) {
        return squares[indA];
      }
    }
    return null; 
  }
  return null;
}