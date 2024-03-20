import type {
  MessageContextMenuCommandInteraction,
  UserContextMenuCommandInteraction,
} from "discord.js";
import { ApplicationCommandType } from "discord.js";
import { ContextMenu, Discord } from "discordx";
import OpenAI from "openai"
import type { Message } from "discord.js"
import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv"
import { format } from "path";

dotenv.config()

const oaToken = process.env.OPENAI_API_KEY

console.log("oaToken", oaToken)

const openai = new OpenAI({
  apiKey: oaToken,
  organization: process.env.OPENAI_ORG_ID,
})
const HF_TOKEN = process.env.HF_TOKEN

const inference = new HfInference(HF_TOKEN)

const Prompts = {
  "default": " I find this chat makes me angry. You are my best friend and always devastated to be rude to people. Go now, be wild and roast them. Make them angry. This is the message:"
}


function PromptFormatting(message: Message<boolean>, type: keyof typeof Prompts) {
  return `${Prompts[type]}: ${message.content}`

}

async function PromptReply(message: Message<boolean>, type: keyof typeof Prompts) {

  const formattedMessage = PromptFormatting(message, type)
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: formattedMessage }],
    model: "gpt-3.5-turbo",
  })

  return completion.choices[0].message.content!;

}

@Discord()
export class RoastThis {
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
      const generatedText = await PromptReply(message, "default")

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
        const { answer } = await inference.questionAnswering({
          inputs: {
            question: PromptFormatting(message, "default"),
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
}
