const Gameboard = ((cells) => {
	const getCells = () => cells;

	/* This method updates the available cells of the
	 * gameboard, deleting the last cell that have been
	 * played. */
	const updateAvailableCells = (cellToRemove) => {
		cells = getCells();
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

	/*
	 * This could actually work to populate each cell.
	 *
	 * let h2 = document.createElement("h2");
	 * h2.style.alignSelf = "center";
	 * h2.innerHTML = "TEST";
	 * cell.appendChild(h2); */

	const p1vscpu = () => {
		console.log("p1vscpu");
		reset();
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

	const turn = (index) => {
		console.log("turn " + index);
	}

	return {getCells, updateAvailableCells, start, reset, turn};
})([0,1,2,3,4,5,6,7,8]);
