import { container } from "tsyringe";
import OpenAI from "openai"
import { HfInference } from "@huggingface/inference";
import { Env } from "@comcord/utils/env";

export function moduleRegistrar(): void {

  container.registerInstance(OpenAI, new OpenAI({
    apiKey: Env("OPENAI_API_KEY"),
    organization: Env("OPENAI_ORG_ID"),
  }));

  container.registerInstance(HfInference, new HfInference(Env("HF_TOKEN")))
}

export function registerInstance(...instances: any): void {
  for (const instance of instances) {
    container.registerInstance(instance.constructor, instance);
  }
}

