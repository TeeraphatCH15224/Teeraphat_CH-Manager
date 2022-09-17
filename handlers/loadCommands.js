const { readdirSync } = require("fs")

module.exports = async (client) => {
    console.log("0------------------| All Handler:");
    const load = dirs => {
        const commands = readdirSync(`./commands/${dirs}/`).filter(d => d.endsWith('.js'));
        for (let file of commands) {
            let pull = require(`../commands/${dirs}/${file}`);
            client.commands.set(pull.name, pull);
            if (pull.aliases) pull.aliases.forEach(a => client.aliases.set(a, pull.name));
          };
        };
        ["Infomation","Owner"].forEach(x => load(x));
        console.log(`[HANDLER - COMMANDS] Command Events Loaded`);
};