const Gameboard = ((cells, removedCells) => {
	var P1;
	var P2OrCPU;
	/* This method updates the available cells of the
	 * gameboard, deleting the last cell that have been
	 * played. */
	const updateAvailableCells = (cellToRemove) => {
		/* We store our cells in two arrays to have more
		 * control over out data. */
		removedCells.push(Number(cellToRemove));
		cells.splice(Number(cellToRemove), 1);
		console.log("cells available : " + cells);
		console.log("cells not available : " + removedCells);
	}

	const resetCells = () => {
		cells = [0,1,2,3,4,5,6,7,8];
		removedCells = [];
	}

	const clearBoard = () => {
		resetCells();
		for(let i = 0; i < cells.length; i++){
			let cell = document.getElementById(i);
			cell.setAttribute("class", "tic-tac-toe-cell");
			/* This actually clears the cell */
			while(cell.firstChild){
				cell.removeChild(cell.firstChild);
			}
		}
	}

	const p1vscpu = () => {
		console.log("p1vscpu");
		reset();
		/* The players */
		P1 = Player("P1", [], "X");
		P2OrCPU = Player("CPU", [], "O");
	}

	const p1vsp2 = () => {
		console.log("p1vsp2");
		reset();
		/* The players */
		P1 = Player("P1", [], "X");
		P2OrCPU = Player("P2", [], "O");
	}

	const start = (mode) => {
		reset();
		if(mode === 0){
			p1vscpu();
		}else if(mode === 1){
			p1vsp2();
		}
	}

	const reset = () => {
		console.log("reset");
		clearBoard();
	}

	const display = (text, cell) => {
		let h2 = document.createElement("h2");
		h2.innerHTML = text;
		h2.style.alignSelf = "center";
		cell.appendChild(h2);
	}

	const checkForWinning = (player) => {
		const winningCombinations = [ [0,1,2],
									  [3,4,5],
									  [6,7,8],
									  [0,3,6],
									  [1,4,7],
									  [2,5,8],
									  [0,4,8],
									  [2,4,6] ];
		const playerMoves = player.getMovements();
		for(let i = 0; i < winningCombinations.length; i++){
			if(playerMoves.includes(winningCombinations[i][0]) &&
				playerMoves.includes(winningCombinations[i][1]) &&
				playerMoves.includes(winningCombinations[i][2])){
				return true;
			}else{
				return false;
			}
		}
	}

	const turn = (element) => {
		/* Disable cell to the user */
		const cell = element.target;
		cell.setAttribute("class", "tic-tac-toe-cell cell-disabled");
		/* Update cells */
		updateAvailableCells(cell.id);
		/* game */
		if(cells.length % 2 == 0){
			/* P1 Stars */
			P1.getMovements().push(cell.id);
			display(P1.getWeapon(), cell);
			/* Check winning */
			if(checkForWinning(P1)){
				endGame(P1);
			}
		}else if(cells.length % 2 != 0){
			P2OrCPU.getMovements().push(cell.id);
			display(P2OrCPU.getWeapon(), cell);
			/* Check winning */
			if(checkForWinning(P2OrCPU)){
				endGame(P2OrCPU);
			}
		}else{
			endGame(null);
		}
	}

	const endGame = (winner) => {
		if(winner === null){
			console.log("A Tie");
		}else{
			console.log(winner + " Wins");
		}
		reset();
	}

	return {start, reset, turn};
})([0,1,2,3,4,5,6,7,8], []);
