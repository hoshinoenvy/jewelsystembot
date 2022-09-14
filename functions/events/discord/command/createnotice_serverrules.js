const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "components": [
    {
      "type": 1,
      "components": [
        {
          "custom_id": `ruleselection`,
          "placeholder": `Please make a selection`,
          "options": [
            {
              "label": `⠀Agree with the rules`,
              "value": `serverrule_agree`,
              "description": `⠀Click this and you'll unlock the rest of the server`,
              "emoji": {
                "id": null,
                "name": `🔴`
              },
              "default": false
            },
            {
              "label": `⠀Disagree with the rules`,
              "value": `serverrule_disagree`,
              "description": `⠀Click this and you'll be kicked out immediately`,
              "emoji": {
                "id": null,
                "name": `🟢`
              },
              "default": false
            }
          ],
          "min_values": 1,
          "max_values": 1,
          "type": 3
        }
      ]
    }
  ],
  "embeds": [
    {
      "type": "rich",
      "title": `◈ Jewel☆Star's Server Rules`,
      "description": `⠀\n**◈ Follow Discord's TOS and be 18+**\nIf you're found to be any younger, you'll be kicked immediately following the server's TOS.\n\n**◈ Use common sense**\nThere are rules but like... if you have common sense, these shouldn't even have to be said.\n\n**◈ Be respectful**\nHarassment, witch hunting, sexism, racism, homophobia, or any amount of hate speech will be tolerated.\n\n**◈ Avoid offensive remarks,**messages, nicknames, and anything that a reasonable person might find offensive.\n\n**◈ Keep Drama off the server**\nI don't need that stuff here...\n\n**◈ Avoid political topics**\nI don't need that stuff here either...\n\n**◈ No spamming**\nThis includes but is not limited too, loud/obnoxious noises in voice, @ mention spam, character spam, image spam, and message spam.\n\n**◈ No Gore or scary content**\nFor example; screamer links, anything horror related, or death.\n\n**◈ Keep all the lewd stuff in the lewd channels**\nAsk me, the admins, or the mods for the R-18 role.\n\n**◈ No harassment**\nIncluding sexual harassment or encouraging of harassment.\n\n**◈ Please make use of the appropriate channels**\n\n**◈ No self or user bots**\nThese are in some cases against the discord TOS and if you need a bot for something use one of the bots already in the server.\n\n**◈ Swearing is allowed**\nThough this does not mean it's okay to be a douchebag to people.\n\n**◈ If you see something against the rules or something that makes you feel unsafe, let staff know.**\nWe want this server to be a welcoming space!\n\n**◈ Envy is exempt from all rules** and may make exemptions.\n\n**◈ If you don’t like Zikoure,** unspeakable things may occur.\n\n**◈ There may be situations not covered by the rules or times where rules may not fit the situation.**\nIf this happens the moderators are trusted to handle the situation appropriately.\n\n\n**By reacting with⠀🔴⠀in the dropdown menu below, you agree to follow the above rules.**\nIf you refuse, you'll be kicked out immediately.`,
      "color": 0xfeadcc
    }
  ]
});