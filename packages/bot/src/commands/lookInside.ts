import { Discord, ContextMenu } from "discordx";
import { injectable } from "tsyringe";
import type { Message, MessageContextMenuCommandInteraction } from "discord.js";
import { ApplicationCommandType } from "discord.js";


@Discord()
@injectable()
export class LookInside {
    public constructor() { }

    @ContextMenu({
        name: "Look Inside",
        type: ApplicationCommandType.Message,
    })
    async imageHandler(
        interaction: MessageContextMenuCommandInteraction,
    ): Promise<void> {
        await interaction.deferReply();
        const message = interaction.targetMessage;

        const attachment = message.attachments.first();
        if (!attachment) {
            await interaction.editReply("There is no image attached to this message.");
            return;
        }

        const url = attachment.url;
        await interaction.editReply(`The image URL is: ${url}`);
    }
}