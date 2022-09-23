const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "ping",
    description: "สถานะปิงของบอท",
    category: "Infomation",
    botPermission: ["SEND_MESSAGES", "EMBED_LINKS", "CONNECT", "SPEAK"],
    ownerOnly: false,

    run: async (interaction, client) => {
        await interaction.deferReply({ ephemeral: false });
        const ping = new EmbedBuilder()
            .setAuthor({ name: 'สถานะปิงของบอทในขณะนี้' })
            .setDescription(`ขณะนี้ปิงของบอทอยู่ที่ ${client.ws.ping}ms `)
            .setColor("#000080")
            .setImage('https://cdn.discordapp.com/attachments/950770133972971558/1000924373684863056/standard_5.gif')
            .setTimestamp()
            .setFooter({ text: 'ขอบคุณผู้สนับสนุนโดย LSP-Hosting', iconURL: 'https://cdn.discordapp.com/attachments/961883426112286731/1013442567955812352/LSPJiBi-T.png' });

        await interaction.editReply({ embeds: [ping] });
    }
};