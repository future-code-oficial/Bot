
// -> Imports
import { CommandInteraction } from "discord.js"
import { SlashCommandBuilder } from "@discordjs/builders"

// -> Data
export const data = new SlashCommandBuilder()
    .setName("rate")
    .setDescription("Gostou da comunidade? Avalie-nos.")

// -> Command
export const call = async (interaction: CommandInteraction) => {
    interaction.reply({ content: `> ⭐ > https://disboard.org/pt-pt/server/927960302530727996`, ephemeral: true })
}