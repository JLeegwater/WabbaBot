const winCheck = (messageArray, row, column) => {
	const team = messageArray[row][column];
	let count = 1;

	// Horizontal
	for (let i = 1; i <= 3 && messageArray[row][column + i] == team; i++) {
		count++;
	}
	for (let i = 1; i <= 3 && messageArray[row][column - i] == team; i++) {
		count++;
	}
	if (count >= 4) {
		console.log(`${team} won with Horizontal`);
		return true;
	}

	count = 1;
	// Vertical
	for (
		let i = 1;
		i <= 3 && row + i >= 0 && messageArray[row + i][column] == team;
		i++
	) {
		count++;
	}

	if (count >= 4) {
		console.log(`${team} won with Vertical`);
		return true;
	}

	count = 1;
	// Diagonal ascending
	for (
		let i = 1;
		i <= 3 && row - i >= 0 && messageArray[row - i][column + i] == team;
		i++
	) {
		count++;
	}
	for (let i = 1; i <= 3 && messageArray[row + i][column - i] == team; i++) {
		count++;
	}
	if (count >= 4) {
		console.log(`${team} won with Diagonal ascending`);
		return true;
	}

	count = 1;
	// Diagonal descending
	for (let i = 1; i <= 3 && messageArray[row + i][column + i] == team; i++) {
		count++;
	}
	for (
		let i = 1;
		i <= 3 && row - i >= 0 && messageArray[row - i][column - i] == team;
		i++
	) {
		count++;
	}
	if (count >= 4) {
		console.log(`${team} won with Diagonal descending`);
		return true;
	}

	return false;
};

const move = (interaction) => {
	// console.log(interaction);
	const messageArray = [...interaction.message.content.split("\n")].map(
		(element) => (element = [...element])
	);

	const curUser = interaction.user.id;
	const player = messageArray[7].slice(-1);

	if (messageArray[8][messageArray[8].length - 1] == "=") {
		// if first player isn't set, add the creator of interaction
		messageArray[8] = messageArray[8].concat(`<@${curUser}>`);
	} else if (messageArray[9][messageArray[9].length - 1] == "=") {
		// if second player isn't set, add the creator of interaction
		messageArray[9] = messageArray[9].concat(`<@${curUser}>`);
	} else if (messageArray[10]) {
		console.log("Game is over");
		interaction.reply({
			content: "Game is over",
			ephemeral: true,
		});
		return;
	}

	if (
		(player == "🔵" && messageArray[8].join("").search(curUser) == -1) ||
		(player == "🔴" && messageArray[9].join("").search(curUser) == -1)
	) {
		console.log("Not your turn");
		interaction.reply({
			content: "Not your turn",
			ephemeral: true,
		});
		return;
	}

	let pos = -1;
	const column = parseInt(interaction.values[0]);
	for (let row = 5; row >= 0 && pos == -1; row--) {
		if (messageArray[row][column] == "⚪") {
			messageArray[row][column] = player;
			messageArray[7][6] = player == "🔵" ? "🔴" : "🔵";
			pos = row;
		}
	}
	// console.log(`row: ${pos}\nColumn: ${column}`);
	if (pos != -1 && winCheck(messageArray, pos, column)) {
		messageArray.push([`${player} player wins!!`]);
	}
	// console.log(messageArray);
	const newMessage = messageArray.map((element) => element.join("")).join("\n");
	interaction.update({ content: newMessage });
	return;
};

module.exports = {
	move,
};
