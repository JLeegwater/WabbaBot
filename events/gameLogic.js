const winCheck = (messageArray, pos) => {
	const team = messageArray[pos];
	let count = 1;

	// Horizontal
	for (let i = 1; i <= 3 && messageArray[pos + i] == team; i++) {
		count++;
	}
	for (let i = 1; i <= 3 && messageArray[pos - i] == team; i++) {
		count++;
	}
	if (count >= 4) {
		return true;
	}

	count = 1;
	// Vertical
	for (
		let i = 1;
		i <= 3 && pos + i * 8 >= 0 && messageArray[pos + i * 8] == team;
		i++
	) {
		console.log(pos - i * 8);
		count++;
	}

	if (count >= 4) {
		return true;
	}

	count = 1;
	// Diagonal Asending
	for (
		let i = 1;
		i <= 3 && pos - i * 8 + i && messageArray[pos - i * 8 + i] == team;
		i++
	) {
		count++;
	}
	for (let i = 1; i <= 3 && messageArray[pos + i * 8 - i] == team; i++) {
		count++;
	}
	if (count >= 4) {
		return true;
	}

	// Diagonal Desending
	for (let i = 1; i <= 3 && messageArray[pos + i * 8 + i] == team; i++) {
		count++;
	}
	for (let i = 1; i <= 3 && messageArray[pos - i * 8 - i] == team; i++) {
		count++;
	}
	// console.log(count);
	if (count >= 4) {
		return true;
	}

	return false;
};

const move = (interaction) => {
	const messageArray = [...interaction.message.content];

	const player = messageArray[messageArray.length - 1];

	let pos = -1;
	for (let row = 5; row >= 0 && pos == -1; row--) {
		const curPos = row * 8 + parseInt(interaction.values[0]);

		if (messageArray[curPos] == "⚪") {
			messageArray[curPos] = player;
			messageArray[messageArray.length - 1] = player == "🔵" ? "🔴" : "🔵";
			pos = curPos;
		}
	}

	if (winCheck(messageArray, pos)) {
		messageArray.push(`\nplayer ${player} wins!!`);
	}
	const newMessage = messageArray.join("");

	return newMessage;
};

module.exports = {
	move,
};
