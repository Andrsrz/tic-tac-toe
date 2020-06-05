const Player = (name, movements, weapon) => {
	const getName = () => name;
	const getMovements = () => movements;
	const getWeapon = () => weapon;

	/* In order to  update the player movements
	 * I need the cell's number and add it to the
	 * movements array */
	const updateMovements = (cell) => {
		let moves = getMovements();
		moves.push(cell);
	}

	/* For new game */
	const resetMovements = () => {
		movements = [];
	}

	/* The attack method works as follows:
	 * we get the cell's number the player is going
	 * to attack to update the player movements and
	 * put the player's weapon. */
	const attack = (cell) => {
		updateMovements(cell);
		return getWeapon();
	}

	return {getName, getWeapon, getMovements, attack, resetMovements};
};
