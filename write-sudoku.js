//This method gets the filled sudoku array and writes it to the console
function writeSudoku(sudoku) {
  let text = ""
  for (let i = 0; i <= 8; i++) {
    for (let j = 0; j <= 8; j++) {
      text += " "
      text += sudoku[i * 9 + j]
      text += " "
      if (j !== 8) {
        text += "|"
      }
    }
    if (i !== 8) {
      text += "\n---+---+---+---+---+---+---+---+---\n"
    }
  }

  console.log(text)
}

module.exports = writeSudoku
