const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { readdirSync } = require("fs");

module.exports = {
    name: "help",
    description: "ดูคำสั่งทั้งหมด",
    category: "Infomation",

    run: async (client, message) => {
        const embed = new EmbedBuilder()
            .setColor("#000080")
            .setAuthor({ name: `คำสั่งสำหรับใช้งานบอททั้งหมด`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
            .setImage('https://cdn.discordapp.com/attachments/950770133972971558/1000924373684863056/standard_5.gif')
        const categories = readdirSync("./commands/")
        embed.setFooter({ text: 'ขอบคุณผู้สนับสนุนโดย LSP-Hosting', iconURL: 'https://cdn.discordapp.com/attachments/961883426112286731/1013442567955812352/LSPJiBi-T.png' });

        categories.forEach(category => {
            const dir = client.commands.filter(c => c.category === category)
            const capitalise = category.slice(0, 1).toUpperCase() + category.slice(1)
            try {
                embed.addFields({ name: `${capitalise} [${dir.size}]`, value: dir.map(c => `\`${c.name}\``).join(" | "), inline: false })
            } catch (e) {

            }
        })

         return message.channel.send({ embeds: [embed] })
    }
}