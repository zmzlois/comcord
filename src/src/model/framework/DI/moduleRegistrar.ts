import {container} from "tsyringe";
import OpenAI from "openai"
import {HfInference} from "@huggingface/inference";

export function moduleRegistrar(): void {
    const oaToken = process.env.OPENAI_API_KEY;
    container.registerInstance(OpenAI, new OpenAI({
        apiKey: oaToken,
        organization: process.env.OPENAI_ORG_ID,
    }));

    const HF_TOKEN = process.env.HF_TOKEN;
    container.registerInstance(HfInference, new HfInference(HF_TOKEN))
}

export function registerInstance(...instances: any): void {
    for (const instance of instances) {
        container.registerInstance(instance.constructor, instance);
    }
}

