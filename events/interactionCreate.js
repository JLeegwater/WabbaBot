const gameLogic = require("./gameLogic");

module.exports = {
	name: "interactionCreate",
	execute(interaction) {
		// console.log(interaction);
		console.log(
			`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`
		);

		if (interaction.isSelectMenu()) {
			interaction.update({ content: gameLogic.move(interaction) });
		}
	},
};
