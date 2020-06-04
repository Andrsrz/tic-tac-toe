const Gameboard = (() => {
	const getCells = () => cells[0,1,2,3,4,5,6,7,8];

	/* This method updates the available cells of the
	 * gameboard, deleting the last cell that have been
	 * played. */
	const updateAvailableCells = (cellToRemove) => {
		cells = getCells();
		cells.splice(cellToRemove, 1);
	}

	return {getCells, updateAvailableCells};
})();
