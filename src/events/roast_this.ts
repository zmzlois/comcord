import dotenv from "dotenv"
import OpenAI from "openai"
import type { Message } from "discord.js"
import { HfInference } from "@huggingface/inference";
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