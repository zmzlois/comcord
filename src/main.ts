import "reflect-metadata";
import {dirname, importx} from "@discordx/importer";
import {DIService} from "@discordx/koa";
import {IntentsBitField} from "discord.js";
import {Client, tsyringeDependencyRegistryEngine} from "discordx";
import * as dotenv from "dotenv"
import {container} from "tsyringe";
import {moduleRegistrar, registerInstance} from "./src/model/framework/DI/moduleRegistrar.js";

dotenv.config();

const BOT_TOKEN = process.env.BOT_TOKEN

async function run() {
  DIService.engine = tsyringeDependencyRegistryEngine.setInjector(container);
  moduleRegistrar();
  if (!BOT_TOKEN) {
    throw Error("Could not find BOT_TOKEN in your environment");
  }
  const client = new Client({
    intents: [
      IntentsBitField.Flags.Guilds,
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
  await client.login(BOT_TOKEN);
}

await run();
