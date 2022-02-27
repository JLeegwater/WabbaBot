const winCheck = (messageArray, row, column) => {
	const team = messageArray[row][column];
	console.log(team);
	let count = 1;

	// Horizontal
	for (let i = 1; i <= 3 && messageArray[row + i] == team; i++) {
		count++;
	}
	for (let i = 1; i <= 3 && messageArray[row - i] == team; i++) {
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
		i <= 3 && row + i * 8 >= 0 && messageArray[row + i * 8] == team;
		i++
	) {
		count++;
	}

	if (count >= 4) {
		console.log(`${team} won with Vertical`);
		return true;
	}

	count = 1;
	// Diagonal Asending
	for (
		let i = 1;
		i <= 3 && row - i * 8 + i && messageArray[row - i * 8 + i] == team;
		i++
	) {
		count++;
	}
	for (let i = 1; i <= 3 && messageArray[row + i * 8 - i] == team; i++) {
		count++;
	}
	if (count >= 4) {
		console.log(`${team} won with Diagonal Asending`);
		return true;
	}

	count = 1;
	// Diagonal Desending
	for (let i = 1; i <= 3 && messageArray[row + i * 8 + i] == team; i++) {
		count++;
	}
	for (let i = 1; i <= 3 && messageArray[row - i * 8 - i] == team; i++) {
		count++;
	}
	if (count >= 4) {
		console.log(`${team} won with Diagonal Desending`);
		return true;
	}

	return false;
};

const move = (interaction) => {
	console.log(interaction);
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
		return;
	}

	if (player == "🔵" && messageArray[8].join("").search(curUser) == -1) {
		console.log("Not your turn");
		return;
	}
	if (player == "🔴" && messageArray[9].join("").search(curUser) == -1) {
		console.log("Not your turn");
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

	// if (winCheck(messageArray, pos, column)) {
	// 	messageArray.push(`player ${player} wins!!`);
	// }

	const newMessage = messageArray.map((element) => element.join("")).join("\n");

	return newMessage;
};

module.exports = {
	move,
};
