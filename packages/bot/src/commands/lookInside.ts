import { Discord, ContextMenu } from "discordx";
import { injectable } from "tsyringe";
import type { Message, MessageContextMenuCommandInteraction } from "discord.js";
import { ApplicationCommandType } from "discord.js";
import { generateImage } from "../handlers/lookInside/generateImage.js";
import fs from "fs"

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

        const generatedImage = await generateImage(interaction.targetMessage);
        await interaction.editReply({
            content: "",
            files: [generatedImage],
        });
        if (fs.existsSync(generatedImage)) {
            fs.unlinkSync(generatedImage);
        }
    }
}