const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
if (context.params.event.member.permission_names.includes('MANAGE_MESSAGES')) { 
await lib.discord.channels['@0.2.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `Logging Message Color Guide `,
      "description": `This logging bot uses color coding to help you easily differenciate different categories of   events for easier moderation! `,
      "color": 0x00baff,
      "fields": [
        {
          "name": `Messages`,
          "value": `All message related events such as deleting a message and spam message detection.\n*Color: :red_circle:*`
        },
        {
          "name": `Members`,
          "value": `All member related events such as a member joining and banning.\n*Color: :purple_circle:* `
        },
        {
          "name": `Channels`,
          "value": `All channel related events such as channel creation and pinning a message in a channel.\n*Color: :yellow_circle:*`
        },
        {
          "name": `Thread `,
          "value": `All thread related events such as member joining and thread creation.\n*Color: :green_circle:*`
        },
        {
          "name": `Invite `,
          "value": `All invite related events such as invite creation and invite destruction. \n*Color: :blue_circle:*`
        },
        {
          "name": `Emoji`,
          "value": `All emoji related events such as upating guild emojis. \n*Color: :black_circle:*`
        },
        {
          "name": `Bot`,
          "value": `All bot related events such as bot mentions. \n*Color: :white_circle:*`
        }
      ],
      "footer": {
        "text": `Feel free to pin this message for future reference`
      }
    }
  ]
})
} else {
  await lib.discord.interactions['@0.0.0'].followups.ephemeral.create({
    token: `${context.params.event.token}`,
    content: '',
    embeds: [{
      title: `Missing Permissions`,
      description: `Sorry! You don't have the required permissions to use this command!`,
      color: 0x00aa00
    }]
  });
}