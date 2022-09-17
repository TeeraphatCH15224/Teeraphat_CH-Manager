const { Client, Collection, GatewayIntentBits, Partials } = require('discord.js');
const { TOKEN, NODES } = require('./settings/config.js');

const client = new Client({
    shards: 'auto',
    allowedMentions: {
        parse: ["roles", "users", "everyone"],
        repliedUser: false
    },
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates,
    ],
    partials: [
        Partials.Channel,
        Partials.Message,
        Partials.User,
        Partials.GuildMember,
        Partials.Reaction
      ],
});

["aliases", "slash", "commands"].forEach(x => client[x] = new Collection());
["loadCommands", "loadEvents", "loadSlashCommand"].forEach(x => require(`./handlers/${x}`)(client));


client.login(TOKEN)

process.on('unhandledRejection', error => console.log(error));
process.on('uncaughtException', error => console.log(error));