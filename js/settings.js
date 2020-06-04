const Settings = (() => {
	const setRadioButtonsEvents = () => {
		let p1vscpu = document.getElementById("p1vscpu");
		p1vscpu.setAttribute("onclick", "Gameboard.p1vscpu();");
		let p1vsp2 = document.getElementById("p1vsp2");
		p1vsp2.setAttribute("onclick", "Gameboard.p1vsp2();");
	}

	const setResetEvent = () => {
		let reset = document.getElementById("reset");
		reset.setAttribute("onclick", "Gameboard.reset();");
	}

	const setEvents = () => {
		setRadioButtonsEvents();
		setResetEvent();
	}

	return {setEvents};
})();
