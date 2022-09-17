module.exports = async (client, error, id) => {
    console.log("[EVENTS - SHARDDISCONNECT] " + "Shard " + id + " Disconnected! " + error);
}