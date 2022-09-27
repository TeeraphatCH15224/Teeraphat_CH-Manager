const { LOG_EXID } = require('../../settings/config.js')
const { EmbedBuilder } = require("discord.js");

module.exports = async (client, member) => {
    const channel = member.guild.channels.cache.get(LOG_EXID);
    if (!channel) return;

    const Exit = new EmbedBuilder()
        .setAuthor({ name: `สมาชิกออก`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
        .setColor("#000080")
        .setDescription(`<@${member.id}> ได้ออกจากเซิร์ฟเวอร์ Teeraphat_CH Community ไปแล้ว`)
        .setTimestamp()
        .setFooter({ text: 'ขอบคุณผู้สนับสนุนโดย LSP-Hosting', iconURL: 'https://cdn.discordapp.com/attachments/961883426112286731/1013442567955812352/LSPJiBi-T.png' });

    return channel.send({ embeds: [Exit] })
}