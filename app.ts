
// ⭐ Github - https://github.com/future-code-oficial

// -> Imports
import { readdirSync } from "fs"

import { TOKEN } from "./settings.json"
import { Client, Intents } from "discord.js"

import { REST } from "@discordjs/rest"
import { Routes } from "discord-api-types/v9"

// -> Rest
const rest: REST = new REST({ version: '9' }).setToken(TOKEN)

// -> Client
const client: Client = new Client({
    intents: [Intents.FLAGS.GUILDS]
})

client.once("ready", () => {
    try {
        loadEvents(); loadCommands();
        console.log("Iniciado com sucesso...")
    } catch(err) { console.error(err) }
})

client.login(TOKEN)

// -> Functions
const loadEvents = () => readdirSync("./events").forEach(file => {
    const evt = require(`./events/${file}`)
    client.on(evt.name, (...args) => evt.call(...args))
})

const loadCommands = async () => 
    await rest.put(Routes.applicationCommands(String(client.user?.id)), {
        body: readdirSync("./commands").map(cmd => require(`./commands/${cmd}`).data.toJSON())
})