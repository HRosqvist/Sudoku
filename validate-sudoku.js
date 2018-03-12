function validateSudoku(sudoku) {
	for (var i = 0; i <= 8; i++) {
		if (!validate(i, 'block', sudoku) ||
      !validate(i, 'row', sudoku) || !validate(i, 'col', sudoku)) {
			return false
		}
	}

	return true
}

function validate(array, x, sudoku) {
  var rightSequence = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  var temp = []
  for (let i = 0; i <= 8; i++) {
    switch(x) {
      case 'row':
        temp[i] = sudoku[array * 9 + i]
        break
      case 'col':
        temp[i] = sudoku[array + i * 9]
        break
      case 'block':
        temp[i] = sudoku[Math.floor(array / 3) * 27 + i % 3 + 9 * Math.floor(i / 3) + 3 * (array % 3)]
        break
    }
  }
  temp.sort()
  return temp.join() == rightSequence.join()
}

module.exports = validateSudoku
