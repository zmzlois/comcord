import type { Route } from "next";
import { Billing, Component, Globe } from "@/components/ui/icons";
import * as Icons from "@/components/ui/icons";

export const siteConfig = {
    name: "ComCord",
    description:
        "Probably the most ridiculous team collaboration tool on discord.",
    // github: "https://github.com/juliusmarminge/comcord-corp",
    twitter: "https://twitter.com/comcord_team",
    discord: "https://discord.gg/2vxMpkYJHX",
};

export const navItems = [
    {
        href: "#features",
        title: "Features",
    },
    {
        href: "#what-they-say",
        title: "What they say",
    },
    {
        href: "#get-started",
        title: "Get Started",
    },
    {
        href: "#faq",
        title: "FAQ",
    },
] satisfies { href: Route; title: string }[];

export const marketingFeatures = [
    {
        icon: "💰",
        title: "Free",
        body: "Free for all until we make a decision.Surely when we have a pricing plan you& rsquo;d be able to scale as your grow 💪🏻",

        color: "pink-boxshadow",
    },
    {
        icon: "📈",
        title: "Empower deep work",
        body: "Instead of asking your team to fill out a form at 8am daily, how about ASKING AT RANDOM TIME in a week and your member can answer in their own time ?",
        color: "burgundy-boxshadow",
    },
    {
        icon: "🔒",
        title: "Secure",
        body: "Built on world & rsquo;s most advance MySQL database.We don & rsquo;t store your converstation-- it & rsquo;s all on your discord with you.Safe fam.",
        color: "orange-boxshadow",
    },
    {
        icon: "⏰",
        title: "Timezone aware",
        body: " Got a remote team spread across different time zones? Our bot swoops in to bridge the gap, keeping everyone in sync and on schedule.",
        color: "yellow-boxshadow",
    },

    {
        icon: "😂",
        title: "We pull memes",
        body: " Try & rsquo; / meme & rsquo; command! We have a meme generator that will make your team laugh out loud.You can also upload your own memes and share them with your team.",
        color: "emerald-boxshadow",
    },
    {
        icon: "😈",
        title: "`Apps -> Look Inside`",
        body: "Make sure you are ready to turn every conversation in your server into a joke and get broadcasted on Twitter.We are are serious.",
        color: `lightblurple-boxshadow`,
    },
];