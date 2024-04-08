import type {
    ButtonInteraction,
    CommandInteraction,
    ComponentEmojiResolvable,
    GuildMember,
    MessageActionRowComponentBuilder,
    User,
} from "discord.js";
import {
    ActionRowBuilder,
    ApplicationCommandOptionType,
    ButtonBuilder,
    ButtonStyle,
    ReactionEmoji,
    ReactionCollector,
} from "discord.js";
import { ButtonComponent, Discord, Slash, SlashOption } from "discordx";

@Discord()
export class Poll {
    @Slash({ description: "Create a poll", name: "poll" })
    async poll(
        @SlashOption({
            description: "Question to ask",
            name: "question",
            required: true,
            type: ApplicationCommandOptionType.String,
        })
        question: string,
        @SlashOption({
            description: "Who to tag?",
            name: "tag-role",
            required: true,
            type: ApplicationCommandOptionType.Role,
        })
        role: User | GuildMember | undefined,
        @SlashOption({
            description: "Positive reaction",
            name: "positive-reaction",
            required: false,
            type: ApplicationCommandOptionType.String,
        })
        positiveReaction: string,
        @SlashOption({
            description: "Negative reaction",
            name: "negative-reaction",
            required: false,
            type: ApplicationCommandOptionType.String,
        })
        negativeReaction: string,
        interaction: CommandInteraction,
    ): Promise<void> {
        await interaction.deferReply();

        const positiveBtn = new ButtonBuilder()
            .setLabel(positiveReaction ? positiveReaction : "👍 LGTM")
            .setStyle(ButtonStyle.Primary)
            .setCustomId("positive");

        const negativeBtn = new ButtonBuilder()
            .setLabel(negativeReaction ? negativeReaction : "☠️ Yeet shit")
            .setStyle(ButtonStyle.Danger)
            .setCustomId("negative");

        await interaction.editReply({
            content: `${role?.toString()} \n\n ${question}`,
        }).then(message => {
            message.react(positiveReaction ? positiveReaction : "🤯"), message.react(negativeReaction ? negativeReaction : "☠️")
        }).catch(console.error)



    }


}


