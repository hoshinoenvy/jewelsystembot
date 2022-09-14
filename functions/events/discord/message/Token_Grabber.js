const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let event = context.params.event;
const dateText = `<t:${Math.round(new Date().getTime() / 1000)}>`
const messageContent = event.content;
let logChannel = await lib.utils.kv['@0.1.16'].get({
  key: `logging_channel_${context.params.event.guild_id}`,
  defaultValue: `None`
});
let isMessageTokengrabber = await lib.chillihero['tokengrabber-check'][
  '@0.2.0'
].check({
  message: messageContent,
});
if (isMessageTokengrabber === true) {

    await lib.discord.channels['@0.2.0'].messages.create({
      channel_id: `${logChannel}`,
      content: ``,
      tts: false,
      embed: {
        type: 'rich',
        title: 'Token Grabber Link Detected',
        description: `
    **User:** <@${context.params.event.author.id}>
    **Discriminator:** \`#${context.params.event.author.discriminator}\`
    **ID:** \`${context.params.event.author.id}\`
    **Channel:** <#${context.params.event.channel_id}>
    **Content:** \`${context.params.event.content}\`
    **Message ID:** \`${context.params.event.id}\`
    **Sent at: ** \`${dateText} UTC\``,
        color: 0xcf1940,
        thumbnail: {},
        footer: {
          text: `  
            Check Audit Log for more specifications`,
        },
      },
    });
  }

