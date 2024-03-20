import type {Message, MessageContextMenuCommandInteraction, UserContextMenuCommandInteraction,} from "discord.js";
import {ApplicationCommandType} from "discord.js";
import {ContextMenu, Discord} from "discordx";
import {injectable} from "tsyringe";
import OpenAI from "openai";
import {HfInference} from "@huggingface/inference";


@Discord()
@injectable()
export class RoastThis {
  public constructor(private openAI: OpenAI, private inference: HfInference) {
  }

  private readonly prompts = {
    "default": " I find this chat makes me angry. You are my best friend and always devastated to be rude to people. Go now, be wild and roast them. Make them angry. This is the message:"
  }

  @ContextMenu({
    name: "Roast This",
    type: ApplicationCommandType.Message,
  })
  async messageHandler(

    interaction: MessageContextMenuCommandInteraction,
  ): Promise<void> {

    const message = interaction.targetMessage

    let replyContent = ""

    try {
      const generatedText = await this.promptReply(message, "default")

      if (generatedText.includes("\"") || generatedText.includes(" ")) {
        const chunks = generatedText.split("\"")[0].replaceAll("\"", "").trim()

        replyContent = chunks
      }
      else {
        replyContent = generatedText
      }
    } catch (error: any) {
      console.error(error)

      if (error.status === 429) {

        // this is unused and hugging face context documentation isn't clear
        const {answer} = await this.inference.questionAnswering({
          inputs: {
            question: this.promptFormatting(message, "default"),
            context: "naughty girl"
          }
        })
        replyContent = answer
      }

      replyContent = "I am sorry I am not able to reply to this message"
      console.log(replyContent)
    }

    await interaction.reply(replyContent);
  }

  @ContextMenu({ name: "Roast Them", type: ApplicationCommandType.User })
  async userHandler(
    interaction: UserContextMenuCommandInteraction,
  ): Promise<void> {
    await interaction.reply(`I am gonna get this fucker <@${interaction.targetUser.id}> out of here`);
  }

  private async promptReply(message: Message, type: keyof typeof this.prompts): Promise<string> {
    const formattedMessage = this.promptFormatting(message, type)
    const completion = await this.openAI.chat.completions.create({
      messages: [{role: "system", content: formattedMessage}],
      model: "gpt-3.5-turbo",
    })
    return completion.choices[0].message.content!;
  }

  private promptFormatting(message: Message<boolean>, type: keyof typeof this.prompts): string {
    return `${this.prompts[type]}: ${message.content}`;
  }
}
