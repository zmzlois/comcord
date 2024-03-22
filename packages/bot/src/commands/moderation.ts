import type { Message, MessageContextMenuCommandInteraction, UserContextMenuCommandInteraction, } from "discord.js";
import { ApplicationCommandType } from "discord.js";
import { ContextMenu, Discord } from "discordx";
import { injectable } from "tsyringe";

@Discord()
@injectable()
export class Moderation {
    public constructor() {
    }

    @ContextMenu({
        name: "Moderation",
        type: ApplicationCommandType.Message,
    })
    async messageHandler(
        interaction: MessageContextMenuCommandInteraction,
    ): Promise<void> {
        await interaction.reply({
            content: "Sorry your message contains high meme ratio, I am deleting it",
            ephemeral: true
        })
    }


}
