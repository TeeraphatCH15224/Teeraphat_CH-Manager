const { EmbedBuilder, ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: "stopbot",
    description: "ปิดบอทของคุณ",
    botPermission: ["SEND_MESSAGES", "EMBED_LINKS", "CONNECT", "SPEAK"],
    ownerOnly: true,

    run: async (interaction, client) => {
        await interaction.deferReply({ ephemeral: false });
        const restart = new EmbedBuilder()
            .setAuthor({ name: 'ระบบการแจ้งเตือน'})
            .setDescription("เราได้ปิดบอทเรียบร้อยแล้ว")
            .setColor("Yellow")
            .setImage('https://cdn.discordapp.com/attachments/950770133972971558/1000924373684863056/standard_5.gif')
            .setTimestamp()
            .setFooter({ text: 'ขอบคุณผู้สนับสนุนโดย LSP-Hosting', iconURL: 'https://cdn.discordapp.com/attachments/961883426112286731/1013442567955812352/LSPJiBi-T.png' });

        await interaction.editReply({ embeds: [restart] });
        console.log(`[COMMANDS - STOPBOT] Shutting down`);

        process.exit();
    }
};