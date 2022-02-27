const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageSelectMenu } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("newgame")
		.setDescription("Starts a new game of connect 4!"),
	async execute(interaction) {
		// console.log(interaction);
		const row = new MessageActionRow().addComponents(
			new MessageSelectMenu()
				.setCustomId("select")
				.setPlaceholder("Nothing selected")
				.setMaxValues(1)
				.addOptions([
					{
						label: "1️⃣",
						description: "Puts your checker in the first collumn",
						value: "0",
					},
					{
						label: "2️⃣",
						description: "Puts your checker in the second collumn",
						value: "1",
					},
					{
						label: "3️⃣",
						description: "Puts your checker in the third collumn",
						value: "2",
					},
					{
						label: "4️⃣",
						description: "Puts your checker in the fourth collumn",
						value: "3",
					},
					{
						label: "5️⃣",
						description: "Puts your checker in the fifth collumn",
						value: "4",
					},
					{
						label: "6️⃣",
						description: "Puts your checker in the sixth collumn",
						value: "5",
					},
					{
						label: "7️⃣",
						description: "Puts your checker in the seventh collumn",
						value: "6",
					},
				])
		);
		await interaction.reply({
			content: `⚪⚪⚪⚪⚪⚪⚪\n⚪⚪⚪⚪⚪⚪⚪\n⚪⚪⚪⚪⚪⚪⚪\n⚪⚪⚪⚪⚪⚪⚪\n⚪⚪⚪⚪⚪⚪⚪\n⚪⚪⚪⚪⚪⚪⚪\n1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣\nTurn: 🔵\n🔵=\n🔴=`,
			components: [row],
		});
	},
};

/* 		const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Some title')
			.setURL('https://discord.js.org/')
			.setDescription('Some description here'); */
