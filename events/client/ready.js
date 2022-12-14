const { ActivityType } = require('discord.js');
const axios = require('axios');
const { YTNAME } = require('../../settings/config.js');


module.exports = async (client) => {

    const { YOUTUBE_KRY, YOUTUBE_USER } = require('../../settings/config.js');
    const { data: { items } } = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${YOUTUBE_USER}&key=${YOUTUBE_KRY}`)

    const [Data] = items
    console.log("0------------------| Ready Event:");
    console.log(`[EVENTS - READY] ${client.user.tag} Login Successfully`)
    client.user.setStatus('dnd');
    setInterval(() => {
        client.user.setActivity(`${YTNAME} ${Data.statistics.subscriberCount} SUB`, { type: ActivityType.Watching });
    }, 30000)

};