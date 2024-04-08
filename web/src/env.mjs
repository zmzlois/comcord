import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    shared: {
        NODE_ENV: z.enum(["development", "test", "production"]),
        SENTRY_AUTH_TOKEN_NEXTJS: z.string(),
    },
    server: {
        DATABASE_URL: z.string().url(),
        CLERK_SECRET_KEY: z.string().optional(),
        CLERK_WEBHOOK_SECRET: z.string(),
        STRIPE_WEBHOOK_SECRET: z.string(),
        RESEND_API_KEY: z.string(),
        DISCORD_SIGNUP_WEBHOOK: z.string().url(),
        DISCORD_ERROR_WEBHOOK: z.string().url(),
        DISCORD_CLIENT_ID: z.string(),
        DISCORD_CLIENT_SECRET: z.string(),
        DISCORD_BOT_TOKEN: z.string(),
        SENTRY_AUTH_TOKEN_NEXTJS: z.string(),

    },
    client: {
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
    },
    // Client side variables gets destructured here due to Next.js static analysis
    // Shared ones are also included here for good measure since the behavior has been inconsistent
    experimental__runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
        SENTRY_AUTH_TOKEN_NEXTJS: process.env.SENTRY_AUTH_TOKEN_NEXTJS,
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
            process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    },
    skipValidation:
        !!process.env.SKIP_ENV_VALIDATION ||
        process.env.npm_lifecycle_event === "lint",
});