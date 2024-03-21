import type { ArgsOf } from "discordx";
import { Client, Discord, On } from "discordx";
import { injectable } from "tsyringe";
import { DIService } from "@discordx/koa";

@Discord()
@injectable()
export class OnReady {
    public constructor(private _client: Client) {
    }

    @On()
    private async ready([client]: ArgsOf<"ready">): Promise<void> {
        await this._client.initApplicationCommands();

        this.initDi();
    }

    private initDi(): void {
        DIService.engine.getAllServices();
    }

    @On()
    private async interactionCreate([interaction]: ArgsOf<"interactionCreate">): Promise<void> {
        try {
            await this._client.executeInteraction(interaction);
        } catch (e) {
            // catch any errors thrown by handlers here
        }
    }

    @On()
    private async messageCreate([message]: ArgsOf<"messageCreate">): Promise<void> {
        await this._client.executeCommand(message);
    }


}
