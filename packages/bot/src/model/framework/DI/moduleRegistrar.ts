import { container } from "tsyringe";
import OpenAI from "openai"
import { HfInference } from "@huggingface/inference";
import { env } from "../../../utils/env.js";

export function moduleRegistrar(): void {

  container.registerInstance(OpenAI, new OpenAI({
    apiKey: env("OPENAI_API_KEY"),
    organization: env("OPENAI_ORG_ID"),
  }));

  container.registerInstance(HfInference, new HfInference(env("HF_TOKEN")))
}

export function registerInstance(...instances: any): void {
  for (const instance of instances) {
    container.registerInstance(instance.constructor, instance);
  }
}

