//This is the method that checks to see if the entire sudoku is valid
function validateSudoku(sudokuBoard) {
	for (let i = 0; i <= 8; i++) {
		if (!validate(i, 'block', sudokuBoard) ||
      !validate(i, 'row', sudokuBoard) || !validate(i, 'column', sudokuBoard)) {
			return false
		}
	}

	return true
}

//Checks if a row, column, or block does not contain duplicates
function validate(step, condition, sudokuBoard) {
  const rightSequence = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let temp = []

  for (let i = 0; i <= 8; i++) {
    switch(condition) {
      case 'row':
        temp.push(sudokuBoard[step * 9 + i])
        break
      case 'column':
        temp.push(sudokuBoard[step + i * 9])
        break
      case 'block':
        temp.push(sudokuBoard[
					Math.floor(step / 3) * 27 + i % 3 + 9 * Math.floor(i / 3) + 3 * (step % 3)])
        break
    }
  }

  temp.sort()
  return temp.join() === rightSequence.join()
}

module.exports = validateSudoku
