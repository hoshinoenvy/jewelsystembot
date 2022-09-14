const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
if (context.params.event.member.permission_names.includes('MANAGE_MESSAGES')) { 

await lib.discord.channels['@0.2.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `Timezones`,
      "description": `Here are the timezones in comparison to the UST or Universal Standard Time. The Prime  Meridian is the line that separates the times that are earlier than UTC from the ones that    are later. GMT and UTC are the exact same thing.`,
      "color": 0x00baff,
      "fields": [
        {
          "name": `Earlier Than UTC - To The East From The Prime Meridian `,
          "value": `- \`GMT-1\`\t- **West Africa Time (WAT)**\t\n- \`GMT-2\` -\t**Azores Time (AT)**\t\n- \`GMT-3\` -\t**Argentina Time (ART)**\t\n- \`GMT-4\`-\t**Atlantic Standard Time (AST)**\t\n- \`GMT-5\` -\t**Eastern Standard Time (EST)**\n- \`GMT-6\` -\t**Central Standard Time (CST)**\n- \`GMT-7\` -\t**Mountain Standard Time (MST)**\n- \`GMT-8\` -\t**Pacific Standard Time (PST)**\t\n- \`GMT-9\` -\t**Alaska Standard Time (AKST)**\t\n- \`GMT-10\` -\t**Hawaii Standard Time (HST)**\t\n- \`GMT-11\` -\t**Nome Time (NT)**\t\n- \`GMT-12\` -\t**International Date Line West (IDLW)**\t`
        },
        {
          "name": `At The Prime Meridian`,
          "value": `- \`GMT+0\`\t- **Greenwich Mean Time (GMT)**\t`,
          "inline": true
        },
        {
          "name": `Later Than UTC - To The West From The Prime Meridian `,
          "value": `- \`GMT+1\` -\t**Central European Time (CET)**\t\n- \`GMT+2\` -\t**Eastern European Time (EET)**\n- \`GMT+3\` -\t**Moscow Time (MSK)**\n- \`GMT+4\` -\t**Armenia Time (AMT)**\n- \`GMT+5\` -\t**Pakistan Standard Time (PKT)**\t\n- \`GMT+6\` -\t**Omsk Time (OMSK)**\t\n- \`GMT+7\` -\t**Kranoyask Time (KRAT)**\t\n- \`GMT+8\` -\t**China Standard Time (CST)**\t\n- \`GMT+9\` -\t**Japan Standard Time (JST)**\n- \`GMT+10\` -\t**Eastern Australia Standard Time (AEST)**\n- \`GMT+11\` -\t**Sakhalin Time (SAKT)**\t\n- \`GMT+12\` -\t**New Zealand Standard Time (NZST)**`
        },
        {
          "name": `How To Convert`,
          "value": `1. Determine if your timezone is ahead or behind of UTC using the chart above.\n2. Earlier means you have to subtract hours, laters means you have to add.\n3. Using the chart, determine how many hours you have to add or subtract.\n4. Add or subtract the hours from the current UTC time. `
        }
      ],
      "footer": {
        "text": `Feel free to pin this message for future reference.`
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