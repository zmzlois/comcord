import * as Icon from "@/components/ui/icons";

export const emoji = ["✨", "❤️", "🔥", "👀"];

export type EmojiType = (typeof emoji)[number];

export const Tab = [
  {
    title: "Add Reaction",
    disabled: false,
    active: false,
    icon: <Icon.ChevronRight className="h-4 w-4" />,
  },
  // {
  //     title: "Add Super Reaction",
  //     disabled: false,
  //     active: false,
  //     icon: <Icon.ChevronRight className="h-4 w-4"/>,
  // },
  // {
  //     title: "Pin Message",
  //     disabled: false,
  //     active: false,
  //     icon: <Icon.Pin className="h-4 w-4" />,
  // },
  {
    title: "Reply",
    disabled: false,
    active: false,
    icon: <Icon.Upleft className="h-4 w-4" />,
  },
  {
    title: "Apps",
    disabled: false,
    active: true,
    icon: <Icon.ChevronRight className="h-4 w-4" />,
  },
  {
    title: "Mark Unread",
    disabled: false,
    active: false,
    icon: <Icon.StepBackward className="h-4 w-4" />,
  },
  {
    title: "Copy Message Link",
    disabled: false,
    active: false,
    icon: <Icon.LinkChain className="h-4 w-4" />,
  },
  {
    title: "Delete Message",
    disabled: true,
    active: false,
    icon: <Icon.Trash2 className="h-4 w-4" />,
  },
  {
    title: "Copy Message ID",
    disabled: false,
    active: false,
    icon: <Icon.GanChart className="h-4 w-4" />,
  },
];

export type TabType = (typeof Tab)[number];

export const App = [
  {
    title: "✅ Mark Solution",
    active: false,
    icon: "https://pbs.twimg.com/profile_images/1562250266690437121/d5xIACwc_400x400.jpg",
  },
  {
    title: "Look Inside",
    active: true,
    icon: "/logo.png",
  },
];
