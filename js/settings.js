const Settings = (() => {
	const setRadioButtonsEvents = () => {
		let p1vscpu = document.getElementById("p1vscpu");
		p1vscpu.setAttribute("onclick", "Gameboard.start(" + 0 + ");");
		let p1vsp2 = document.getElementById("p1vsp2");
		p1vsp2.setAttribute("onclick", "Gameboard.start(" + 1 + ");");
	}

	const setResetEvent = () => {
		let reset = document.getElementById("reset");
		reset.setAttribute("onclick", "Gameboard.reset();");
	}

	const setCellsEvents = () => {
		let cells = document.getElementsByClassName("tic-tac-toe-cell");
		for(const cell of cells){
			const id = cell.id;
			cell.setAttribute("onclick", "Gameboard.turn(" + id + ");");
		}
	}

	const setEvents = () => {
		setRadioButtonsEvents();
		setResetEvent();
		setCellsEvents();
	}

	return {setEvents};
})();
