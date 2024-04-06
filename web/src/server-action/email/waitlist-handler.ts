"use server";

import db, { createId, schema } from "@comcord/db";
import { WaitlistEmail } from "@comcord/emails";
import { Resend } from "resend";
import * as z from "zod";

import { sendDiscordSignUpMessage } from "@/server-action/discord";

// import { env } from "~/env.mjs";

const resend = new Resend(process.env.RESEND_API_KEY);

const { prospects, mailEvents, prospectMailEvents, eq, and } = schema;

const emailSchema = z.object({ email: z.string().email() });

export async function WaitlistHandler({
    input,
}: {
    input: z.infer<typeof emailSchema>;
}) {
    const { email } = input;
    const emailId = createId();
    const mailingEventId = createId();
    const subject = "️‍🔥 ComCord Team: Verify your email";
    const verificationId = createId();

    await sendDiscordSignUpMessage(
        ` ${email} is trying to sign up to our waitlist`,
    );
    const existingEmail = await db
        .select()
        .from(prospects)
        .where(eq(prospects.email, email));

    // If the email already exists in the database, we will not create a new entry for it. Instead, we will update the existing entry. and create new mailing event
    if (existingEmail.length > 0) {
        const mailEvent = await db.insert(mailEvents).values({
            id: mailingEventId,
            email: email,
            subject: subject,
            template: "comcord-waitlist",
        });
        const createProspectMailEvents = await db
            .insert(prospectMailEvents)
            .values({
                prospectId: existingEmail[0]!.id,
                mailEventId: mailingEventId,
            });
        const data = await resend.emails.send({
            from: "Lois <lois.z@comcord.vision>",
            to: [email],
            subject: subject,
            react: WaitlistEmail({
                verificationId: existingEmail[0]?.verificationId ?? verificationId,
            }) as React.ReactElement,
        });
        const updateMailEvent = await db
            .update(mailEvents)
            .set({
                externalId: data.id,
            })
            .where(eq(mailEvents.id, mailingEventId));

        return {
            data,
            mailEvent,
            updateMailEvent,
            createProspectMailEvents,
        };
    }

    const saveEmail = await db.insert(prospects).values({
        id: emailId,
        email: email,
        verified: 0,
        verificationId: verificationId,
        subscribed: 1,
    });
    const mailEvent = await db.insert(mailEvents).values({
        id: mailingEventId,
        email: email,
        subject: subject,
        template: "comcord-waitlist",
    });
    const createProspectMailEvents = await db.insert(prospectMailEvents).values({
        prospectId: emailId,
        mailEventId: mailingEventId,
    });
    const data = await resend.emails.send({
        from: "Lois <lois.z@comcord.vision>",
        to: [email],
        subject: subject,
        react: WaitlistEmail({ verificationId }) as React.ReactElement,
    });
    const updateMailEvent = await db
        .update(mailEvents)
        .set({
            externalId: data.id,
        })
        .where(eq(mailEvents.id, mailingEventId));

    await sendDiscordSignUpMessage(
        ` ${email} is trying to join waitlist and we sent them an email`,
    );

    return {
        data,
        saveEmail,
        mailEvent,
        updateMailEvent,
        createProspectMailEvents,
    };
}

export async function queryEmail({
    input,
}: {
    input: z.infer<typeof emailSchema>;
}) {
    const { email } = input;
    const emailInfo = await db
        .select()
        .from(prospects)
        .where(and(eq(prospects.email, email), eq(prospects.verified, 1)));
    return emailInfo;
}

export async function verifyEmail({ input }: { input: string }) {
    const verifying = await db
        .update(prospects)
        .set({ verified: 1, verifiedAt: new Date() as unknown as undefined })
        .where(eq(prospects.verificationId, input));

    return verifying;
}

export async function confirmVerification({ input }: { input: string }) {
    const verified = await db
        .select()
        .from(prospects)
        .where(and(eq(prospects.verificationId, input), eq(prospects.verified, 1)));

    if (!verified)
        return await sendDiscordSignUpMessage(
            `For some reason ${input} is not verified`,
        );
    await sendDiscordSignUpMessage(` ${verified[0]!.email} is verified`);
    return verified;
}