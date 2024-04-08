import type { ArgsOf, Client } from "discordx";
import { Discord, On } from "discordx";

@Discord()
export class Moderation {
  @On()
  messageDelete([message]: ArgsOf<"messageDelete">, client: Client): void {
    console.log("Message Deleted", client.user?.username, message.content);
  }

  @On({ event: "messageCreate" })
  messageSent([message]: ArgsOf<"messageCreate">, client: Client): void {
    console.log("Message Sent", "username:", message.author.globalName, "message content", message.content, "channel name:", message.channel, "guild name:", message.guild?.name)

    if (message.channelId === "1196928792942362665" && message.content.includes("tenor")) {
      message.delete();
    }

  }
}
