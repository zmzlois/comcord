import "reflect-metadata";
import { dirname, importx } from "@discordx/importer";
import { DIService } from "@discordx/koa";
import { IntentsBitField } from "discord.js";
import { Client, tsyringeDependencyRegistryEngine } from "discordx";
import { container } from "tsyringe";
import { moduleRegistrar, registerInstance } from "./src/model/framework/DI/moduleRegistrar.js";
import { Env } from "./src/utils/env.js";



async function run() {
  DIService.engine = tsyringeDependencyRegistryEngine.setInjector(container);
  moduleRegistrar();
  if (!Env("DISCORD_BOT_TOKEN")) {
    throw Error("Could not find BOT_TOKEN in your environment");
  }
  const client = new Client({
    intents: [
      IntentsBitField.Flags.Guilds,
      IntentsBitField.Flags.GuildPresences,
      IntentsBitField.Flags.GuildWebhooks,
      IntentsBitField.Flags.DirectMessageTyping,
      IntentsBitField.Flags.GuildMembers,
      IntentsBitField.Flags.GuildMessages,
      IntentsBitField.Flags.GuildMessageReactions,
      IntentsBitField.Flags.GuildVoiceStates,
      IntentsBitField.Flags.MessageContent,
    ],
    silent: false,
    simpleCommand: {
      prefix: "!",
    },
  });
  registerInstance(client);
  await importx(`${dirname(import.meta.url)}/{events,commands}/**/*.{ts,js}`);
  await client.login(Env("DISCORD_BOT_TOKEN"));
}

await run();
