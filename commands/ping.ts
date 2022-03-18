
// -> Imports
import { CommandInteraction } from "discord.js"
import { SlashCommandBuilder } from "@discordjs/builders"

// -> Data
export const data = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Veja minha latência.")

// -> Command
export const call = async (interaction: CommandInteraction) => {
    interaction.reply({ content: `> 🇧🇷 > ${Math.round(interaction.client.ws.ping)}ms`, ephemeral: true })
}