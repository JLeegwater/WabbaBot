const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('newgame')
		.setDescription('Starts a new game of connect 4!'),
	async execute(interaction) {
		const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions([
						{
							label: '1️⃣',
							description: 'Puts your checker in the first collumn',
							value: 'first_option',
						},
						{
							label: '2️⃣',
							description: 'Puts your checker in the second collumn',
							value: 'second_option',
						},
						{
							label: '3️⃣',
							description: 'Puts your checker in the third collumn',
							value: 'third_option',
						},
						{
							label: '4️⃣',
							description: 'Puts your checker in the fourth collumn',
							value: 'fourth_option',
						},
						{
							label: '5️⃣',
							description: 'Puts your checker in the fifth collumn',
							value: 'fifth_option',
						},
						{
							label: '6️⃣',
							description: 'Puts your checker in the sixth collumn',
							value: 'sixth_option',
						},
						{
							label: '7️⃣',
							description: 'Puts your checker in the seventh collumn',
							value: 'seventh_option',
						},
					]),
			);
		await interaction.reply({ content:'⚪⚪⚪⚪⚪⚪⚪\n⚪⚪⚪⚪⚪⚪⚪\n⚪⚪⚪⚪⚪⚪⚪\n⚪⚪⚪⚪⚪⚪⚪\n⚪⚪⚪⚪⚪⚪⚪\n⚪⚪⚪⚪⚪⚪⚪\n1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣', components:[row] });
	},
};

/* 		const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Some title')
			.setURL('https://discord.js.org/')
			.setDescription('Some description here'); */