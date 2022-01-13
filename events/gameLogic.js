String.prototype.toCharArray = function () {
	return [...this];
};

Array.prototype.toString = function () {
	return this.join("");
};

const move = (interaction) => {
	const messageArray = interaction.message.content.toCharArray();

	const player = messageArray[messageArray.length - 1];

	console.log(player);

	let pos = -1;
	for (let row = 5; row >= 0 && pos == -1; row--) {
		const curPos = row * 8 + parseInt(interaction.values[0]);

		if (messageArray[curPos] == "⚪") {
			messageArray[curPos] = player;
			messageArray[messageArray.length - 1] = player == "🔵" ? "🔴" : "🔵";
			pos = curPos;
		}
	}

	const newMessage = messageArray.toString();

	return newMessage;
};

module.exports = {
	move,
};
