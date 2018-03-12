//This class is responsible for solving the empty board
const validateSudoku = require('./validate-sudoku')
const writeSudoku = require('./write-sudoku')
const checkNumber = require('./check-number')

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

function checkBoard(sudokuBoard) {
	var emptyPositions = []

	for (var i = 0; i <= 80; i++) {
		if (sudokuBoard[i] === 0) {
			emptyPositions[i] = []
			emptyPositions[i] = checkNumber(i, sudokuBoard)
			if (emptyPositions[i].length === 0) {
				return false
			}
		}
	}

	return emptyPositions
}

function nextRandom(emptyPositions) {
	var max = 9
	var min = 0
	for (var i = 0; i <= 80; i++) {
		if (typeof emptyPositions[i] !== 'undefined') {
			if ((emptyPositions[i].length <= max) && (emptyPositions[i].length > 0)) {
				max = emptyPositions[i].length
				min = i
			}
		}
	}
	return min
}

function getRandomNumber(emptyPositions, square) {
	var number = Math.floor(Math.random() * emptyPositions[square].length)
	return emptyPositions[square][number]
}

function backtrack(attemptArray, number) {
	var newArray = []
	for (var i = 0; i < attemptArray.length; i++) {
		if (attemptArray[i] !== number) {
			newArray.unshift(attemptArray[i])
		}
	}
	return newArray;
}

module.exports = solveSudoku
