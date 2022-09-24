const { LOG_WEID } = require('../../settings/config.js')
const { EmbedBuilder } = require("discord.js");

module.exports = async (client, member) => {
    const channel = member.guild.channels.cache.get(LOG_WEID);
    if (!channel) return;
    
    const Welcome = new EmbedBuilder()
    .setAuthor({ name: `สมาชิกเข้าใหม่`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setColor("#000080")
    .setDescription(`ยินดีต้อนรับคุณ <@${member.id}> เข้าสู่ Teeraphat_CH Community`)
    .addFields(
        { name: 'ข้อมูล Discord', value: '<#1020611885709676544>', inline: true },
        { name: 'อ่านกฎ Discord', value: '<#1020611887588716635>', inline: true },
        { name: 'ช่องทางประกาศ', value: '<#1020611892949045249>', inline: true },
        { name: 'อัพเดทข่าวในช่องทางต่างๆ', value: '<#1020611896119926814>', inline: true },
        { name: 'แจ้งเตือนวีดิโอใหม่', value: '<#1020611894358319145>', inline: true },
        { name: 'แชทพูดคุยทั่วไป', value: '<#1020611905825546290>', inline: true },
    )
    .setTimestamp()
    .setFooter({ text: 'ขอบคุณผู้สนับสนุนโดย LSP-Hosting', iconURL: 'https://cdn.discordapp.com/attachments/961883426112286731/1013442567955812352/LSPJiBi-T.png' });

    return channel.send({ embeds: [Welcome] })
}