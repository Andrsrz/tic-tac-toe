const Gameboard = ((cells) => {
	/* This method updates the available cells of the
	 * gameboard, deleting the last cell that have been
	 * played. */
	const updateAvailableCells = (cellToRemove) => {
		cells.splice(cellToRemove, 1);
	}

	const clearBoard = () => {
		for(let i = 0; i < cells.length; i++){
			let cell = document.getElementById(i);
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
		let player = Player("P1", [], "X");
		let cpu = Player("CPU", [], "O");
		while(cells.length >= 0){
			if(cells.length % 2 == 0){
				/* Pick a cell */
				/* Add to player array */
				/* Check for winning */
				/* Update cells available */
			}else{
				/* Pick a cell */
				/* Add to player array */
				/* Check for winning */
				/* Update cells available */
			}
		}
	}

	const p1vsp2 = () => {
		console.log("p1vsp2");
		reset();
	}

	const start = (mode) => {
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

	const turn = (element) => {
		console.log("turn " + element.target.id);
		let h2 = document.createElement("h2");
		h2.style.alignSelf = "center";
		h2.innerHTML = "TEST";
		element.target.appendChild(h2);
	}

	return {start, reset, turn};
})([0,1,2,3,4,5,6,7,8]);
