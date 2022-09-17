const { readdirSync } = require('fs');

module.exports = async (client) => {
    readdirSync("./slashcommands/").map(async dir => {
        const commands = readdirSync(`./slashcommands/${dir}/`).map(async (cmd) => {
            const pull = require(`../slashcommands/${dir}/${cmd}`)
            client.slash.set(pull.name, pull);
            if (pull.aliases) {
                pull.aliases.map(x => client.slash.set(x, pull));
            }
        });
    })
    console.log(`[HANDLER - SLASH] SlashCommand Events Loaded`);
}