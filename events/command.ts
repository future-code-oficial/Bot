
// -> Imports
import { Interaction } from "discord.js"

// -> Data
export const name = "interactionCreate"

// -> Event
export const call = async (interaction: Interaction) => {
        if (!interaction.isCommand()) return

        try {
            (await import(`../commands/${interaction.commandName}`)).call(interaction)
        } catch (err) {
            interaction.reply({ content: "> ☠️ > Ocorreu um erro ao executar o comando.", ephemeral: true})
        }
}