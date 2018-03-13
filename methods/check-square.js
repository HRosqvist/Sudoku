//This method returns a list of legal moves for a given square
function checkSquare(square, sudokuBoard) {
	let legalMoves = []
	for (let i = 1; i <= 9; i++) {
		if (checkLegalMove(square, i, sudokuBoard)) {
			legalMoves.push(i)
		}
	}
	return legalMoves
}

//returns true if a given number can be placed in a specified square
function checkLegalMove(square, number, sudokuBoard) {
	const row = returnRow(square)
	const column = returnColumn(square)
	const block = returnBlock(square)
	return checkValidity(number, row, 'row', sudokuBoard)
		&& checkValidity(number, column, 'column', sudokuBoard)
		&& checkValidity(number, block, 'block', sudokuBoard)
}

//returns a number that indicates which row a square is in
function returnRow(square) {
	return Math.floor(square / 9)
}

//returns a number that indicates which column a square is in
function returnColumn(square) {
	return square % 9
}

//returns a number that indicates which block a square is in
function returnBlock(square) {
	return Math.floor(returnRow(square) / 3) * 3 + Math.floor(returnColumn(square) / 3)
}

//checks a row, column, or block to see if a number already exists
function checkValidity(number, step, condition, sudokuBoard) {
	for (let i = 0; i <= 8; i++) {
		switch(condition) {
			case 'row':
				if (sudokuBoard[step * 9 + i] === number) {
					return false
				}
				break
			case 'column':
				if (sudokuBoard[step + 9 * i] === number) {
					return false
				}
				break
			case 'block':
				if (sudokuBoard[Math.floor(step / 3) * 27 + i % 3 + 9 * Math.floor(i / 3) + 3 * (step % 3)]
					=== number) {
					return false
				}
				break
		}
	}

	return true
}

module.exports = checkSquare
