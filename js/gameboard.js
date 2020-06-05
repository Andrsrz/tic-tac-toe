const Gameboard = ((cells, removedCells) => {
	var P1;
	var P2OrCPU;
	/* This method updates the available cells of the
	 * gameboard, deleting the last cell that have been
	 * played. */
	const updateAvailableCells = (cellToRemove) => {
		/* We store our cells in two arrays to have more
		 * control over out data. */
		removedCells.push(cellToRemove);
		/* Linear Search
		 * We search for the number inside cells array to know
		 * in what index it's located, and delete that index
		 * with splice's array method. */
		for(let i = 0; i < cells.length; i++){
			if(cells[i] === cellToRemove){
				cells.splice(i, 1);
			}
		}
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

	const reset = () => {
		console.log("reset");
		clearBoard();
	}

	const displayPlayerStats = (player1, player2) => {
		const spanP1 = document.getElementById("p1");
		const spanP2OrCPU = document.getElementById("p2orcpu");

		/* Clen previous stats */
		while(spanP1.firstChild && spanP2OrCPU.firstChild){
				spanP1.removeChild(spanP1.firstChild);
				spanP2OrCPU.removeChild(spanP2OrCPU.firstChild);
		}

		let h2P1 = document.createElement("h2");
		h2P1.innerHTML = player1.getName() + " : " + player1.getWeapon();
		spanP1.appendChild(h2P1);
		let h2P2OrCPU = document.createElement("h2");
		h2P2OrCPU.innerHTML = player2.getName() + " : " + player2.getWeapon();
		spanP2OrCPU.appendChild(h2P2OrCPU);
	}

	const p1vscpu = () => {
		console.log("p1vscpu");
		P1 = Player("P1", [], "X");
		P2OrCPU = Player("CPU", [], "O");
		displayPlayerStats(P1, P2OrCPU);
	}

	const p1vsp2 = () => {
		console.log("p1vsp2");
		P1 = Player("P1", [], "X");
		P2OrCPU = Player("P2", [], "O");
		displayPlayerStats(P1, P2OrCPU);
	}

	/* Starts the game in the selected mode */
	const start = (mode) => {
		reset();
		if(mode === 0){
			p1vscpu();
		}else if(mode === 1){
			p1vsp2();
		}
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

		/* No need to check if there aren't at
		 * least three moves of the player. */
		if(playerMoves.length < 3){
			return false;
		}

		for(let i = 0; i < winningCombinations.length; i++){
			if(playerMoves.includes(winningCombinations[i][0]) &&
				playerMoves.includes(winningCombinations[i][1]) &&
				playerMoves.includes(winningCombinations[i][2])){
				return true;
			}
		}

		return false;
	}

	const turn = (element) => {
		/* Disable cell to the user */
		const cell = element.target;
		cell.setAttribute("class", "tic-tac-toe-cell cell-disabled");
		const cellNumber = Number(cell.id);

		/* game */
		if(cells.length % 2 != 0){
			/* P1 Stars */
			display(P1.attack(cellNumber), cell);
			/* Check winning */
			if(checkForWinning(P1)){
				endGame(P1);
			}
		}else if(cells.length % 2 == 0){
			display(P2OrCPU.attack(cellNumber), cell);
			/* Check winning */
			if(checkForWinning(P2OrCPU)){
				endGame(P2OrCPU);
			}
		}

		/* Update cells after checkin for the array
		 * length */
		updateAvailableCells(cellNumber);

		/* If no one wons */
		if(cells.length === 0){
			endGame(null);
		}
	}

	const endGame = (winner) => {
		winner ? console.log(winner.getName() + " Wins") : console.log("It's a Tie");
		/* Disable all remaining cells until new game */
		for(let i = 0; i < cells.length; i++){
			let cell = document.getElementById(cells[i]);
			cell.setAttribute("class", "tic-tac-toe-cell cell-disabled");
		}
		/* And delete player movements */
		P1.resetMovements();
		P2OrCPU.resetMovements();
	}

	return {start, reset, turn};
})([0,1,2,3,4,5,6,7,8], []);
