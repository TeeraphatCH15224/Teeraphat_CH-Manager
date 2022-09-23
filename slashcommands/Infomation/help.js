const { EmbedBuilder } = require("discord.js");
const { readdirSync } = require("fs");

module.exports = {
    name: "help",
    description: "ดูคำสั่งทั้งหมด",
    category: "Infomation",
    botPermission: ["SEND_MESSAGES", "EMBED_LINKS", "CONNECT", "SPEAK"],
    ownerOnly: false,

    run: async (interaction, client) => {
        await interaction.deferReply({ ephemeral: false });

        const embed = new EmbedBuilder()
            .setColor("#000080")
            .setAuthor({ name: `คำสั่งสำหรับใช้งานบอททั้งหมด`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
        const categories = readdirSync("./slashcommands/")
      embed.setFooter({ text: 'ขอบคุณผู้สนับสนุนโดย LSP-Hosting', iconURL: 'https://cdn.discordapp.com/attachments/961883426112286731/1013442567955812352/LSPJiBi-T.png' });

        categories.forEach(category => {
            const dir = client.slash.filter(c => c.category === category)
            const capitalise = category.slice(0, 1).toUpperCase() + category.slice(1)
            try {
                embed.addFields({ name: `❯ ${capitalise} [${dir.size}]:`, value: dir.map(c => `\`${c.name}\``).join(" | "), inline: false })
            } catch (e) {
                console.log(e)
            }
        })
        return interaction.editReply({ embeds: [embed]})
    }
}