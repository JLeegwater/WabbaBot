module.exports = {
	name: "newgame",
	execute(interaction) {
		console.log(`${interaction.user.tag} picked #${interaction.values}`);
	},
};
