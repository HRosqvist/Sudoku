//This class is responsible for solving the empty board
const validateSudoku = require('./validate-sudoku')
const writeSudoku = require('./write-sudoku')
const checkSquare = require('./check-square')

//Solves the board
function solveSudoku(sudokuBoard) {
	let saved = []
	let savedSudoku = []
	let availableMoves
	let whatToTry
	let attempt

	while (!validateSudoku(sudokuBoard)) {
		availableMoves = checkBoard(sudokuBoard)
		if (availableMoves === false) {
			availableMoves = saved.pop()
			sudokuBoard = savedSudoku.pop()
		}
		whatToTry = nextRandom(availableMoves)
		attempt = getRandomNumber(availableMoves, whatToTry)
		if (availableMoves[whatToTry].length > 1) {
			availableMoves[whatToTry] = backtrack(availableMoves[whatToTry], attempt)
			saved.push(availableMoves.slice())
			savedSudoku.push(sudokuBoard.slice())
		}
		sudokuBoard[whatToTry] = attempt
	}

	writeSudoku(sudokuBoard)
}

//This function returns a two-dimensional array containing
//every legal move for each square returns false if no legal moves are found
function checkBoard(sudokuBoard) {
	let possibleMoves = []

	for (let i = 0; i <= 80; i++) {
		if (sudokuBoard[i] === 0) {
			possibleMoves[i] = []
			possibleMoves[i] = checkSquare(i, sudokuBoard)
			if (possibleMoves[i].length === 0) {
				return false
			}
		}
	}

	return possibleMoves
}

//Returns the square with the fewest legal moves
function nextRandom(possibleMoves) {
	let max = 9
	let min = 0
	for (let i = 0; i <= 80; i++) {
		if (typeof possibleMoves[i] !== 'undefined') {
			if ((possibleMoves[i].length <= max) && (possibleMoves[i].length > 0)) {
				max = possibleMoves[i].length
				min = i
			}
		}
	}
	return min
}

//Returns a random number that is legal for the given square
function getRandomNumber(possibleMoves, square) {
	const number = Math.floor(Math.random() * possibleMoves[square].length)
	return possibleMoves[square][number]
}

//Backtracks if a move is not legal
function backtrack(attemptArray, number) {
 	let newArray = []
	for (let i = 0; i < attemptArray.length; i++) {
		if (attemptArray[i] !== number) {
			newArray.unshift(attemptArray[i])
		}
	}
	return newArray;
}

module.exports = solveSudoku
