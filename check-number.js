function checkNumber(square, sudoku) {
	var possible = []
	for (var i = 1; i <= 9; i++) {
		if (isPossibleNumber(square, i, sudoku)) {
			possible.unshift(i)
		}
	}
	return possible
}

function isPossibleNumber(square, number, sudoku) {
	var row = returnRow(square)
	var col = returnCol(square)
	var block = returnBlock(square)
	return checkRow(number, row, sudoku) && checkCol(number, col, sudoku) && checkBlock(number, block, sudoku)
}

function returnRow(square) {
	return Math.floor(square / 9)
}

function returnCol(square) {
	return square % 9
}

function returnBlock(square) {
	return Math.floor(returnRow(square) / 3) * 3 + Math.floor(returnCol(square) / 3)
}

function checkRow(number, row, sudoku) {
	for (let i = 0; i <= 8; i++) {
		if (sudoku[row * 9 + i] === number) {
			return false
		}
	}
	return true
}

function checkCol(number, col, sudoku) {
	for (let i = 0; i <= 8; i++) {
		if (sudoku[col + 9 * i] === number) {
			return false
		}
	}
	return true
}

function checkBlock(number, block, sudoku) {
	for (let i = 0; i <= 8; i++) {
		if (sudoku[Math.floor(block / 3) * 27 + i % 3 + 9 * Math.floor(i / 3) + 3 * (block %3 )] === number) {
			return false
		}
	}
	return true
}


module.exports = checkNumber
