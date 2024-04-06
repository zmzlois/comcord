"use server";

import { env } from "~/env.mjs";

export const sendDiscordSignUpMessage = async (
    message: string,
    id?: unknown,
    error?: unknown,
) => {
    try {
        // A fetch request to send data through the discord
        // webhook, and display it as a message in your
        // discord channel
        await fetch(env.DISCORD_SIGNUP_WEBHOOK, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: message,
            }),
        });
    } catch (err) {
        // Just in case :)
        console.log(`[Discord Webhook Error]:`, err);
    }
};

export const sendDiscordErrorMessage = async ({
    message,
    id,
    error,
}: {
    message: string;
    id?: string;
    error?: unknown;
}) => {
    try {
        // A fetch request to send data through the discord
        // webhook, and display it as a message in your
        // discord channel
        await fetch(env.DISCORD_NEXT_ERROR_WEBHOOK, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: `${message} ${id ? `ID: (${id})` : "Unknown Id"} ${error ? `Error: ${error}` : "Unknown Error"
                    }`,
            }),
        });
    } catch (err) {
        // Just in case :)
        console.log(`[Discord Webhook Error]:`, err);
    }
};