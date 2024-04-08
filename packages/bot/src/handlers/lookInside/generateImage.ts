import type { Message } from "discord.js";

import { getScreenShot } from "./usingPuppeteer.js";

export async function generateImage(message: Message) {
    const escapeHtml = message.cleanContent
        ?.replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

    const randomNumber = Math.floor(Math.random() * 500) + 100;
    const html = `
        <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <style>
    * {
      margin: 0;
      font-family: "Roboto", sans-serif;
      border: 0;
      font-size: 40px;
      font-style: inherit;
      font-weight: inherit;
      margin: 0;
      padding: 0;
      vertical-align: baseline;
      overflow: hidden;
    }

    .app {
      display: flex;
    }
    .message-group {
      margin: 10px 0px;
      padding: 10px 1px;
      background-color: #36393f;
      width: "100%";
    }
    .header-group > .avatar img {
      position: absolute;
      border-radius: 50%;
      height: 45px;
      width: 45px;
    }
    .header-group > .header {
      margin-left: 60px;
      padding-top: 3px;
      color: #fff;
      height: 1.3em;
    }
    .header-group > .header > .timestamp {
      color: rgba(255, 255, 255, 0.2);
      font-size: 0.75rem;
      font-weight: 400;
      letter-spacing: 0;
      margin-left: 0.3rem;
    }
    .message {
      color: #dcddde;
      margin-left: 60px;
      padding-right: 10px;
    }
    .message > .content {
      margin-top: 4px;
      font-size: 0.9375rem;
      color: #dcddde;
      width: "100%";
    }
    .divider {
      border: none;
      border-bottom: 1px solid transparent;
      margin: 20px 0px -20px;
      border-bottom-color: rgba(255, 255, 255, 0.04);
    }
    .md > bold {
      font-weight: 700;
    }
    .md > underline {
      text-decoration: underline;
    }
    .md > strike {
      text-decoration: line-through;
    }
    .md > italic {
      font-style: italic;
    }
    code.inline {
      border: none;
      border-radius: 3px;
      font-family: Consolas, Liberation Mono, Menlo, Courier, monospace;
      font-size: 85%;
      height: auto;
      margin: -0.2em 0;
      padding: 0.2em;
      text-indent: 0;
      width: auto;
      background: #2f3136;
      line-height: 1.3;
      user-select: text;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
  </style>
  <body>
    <p>> A notification from Discord</p>
    <p>> Look Inside</p>
    <div class="message-group">
      <div class="header-group">
        <div class="avatar">
          <img
            src="https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar
        }.png?size=128"
          />
        </div>
        <div class="header">
          ${message.author.username}<span class="timestamp">${message.createdAt.toLocaleDateString() +
        " " +
        message.createdAt.toLocaleTimeString()
        }</span>
        </div>
      </div>
      <div class="message">
        <div class="content"> <span id="messagecontent"></span>
        ${message.attachments
            .map((attachment) => {
                return `<br/> <img src="${attachment.url}" width="100%"/>`;
            })
            .join("")}
        </div>
      </div>
    </div>
    <img
      src="https://http.cat/${randomNumber}"
      alt="Cat"
      height="100%"
      width="100%"
    />
  <script>
    document.getElementById("messagecontent").innerHTML = "${escapeHtml}";
  </script>
  </body>
</html>
        `;

    try {
        if (message.attachments.size > 0 && message.attachments.first()?.url) {
            if (message.attachments.first()?.url.split("?")[0].endsWith(".gif")) {
                return await getScreenShot(html, true);
            }
        }
        return await getScreenShot(html);
    } catch (error) {
        return Buffer.from("Error Generating Image", "utf-8");
    }
}
