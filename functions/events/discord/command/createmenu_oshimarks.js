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
          "custom_id": `row_5_select_0`,
          "placeholder": `Please make a selection`,
          "options": [
            {
              "label": `⠀Roselyns`,
              "value": `oshimenu_roselyns`,
              "description": `⠀Envy's supporters. Pledge your loyalty to the Sun.`,
              "emoji": {
                "id": `1017904154158567565`,
                "name": `OshiMarkRoselyns`,
                "animated": false
              },
              "default": false
            },
            {
              "label": `⠀Nox`,
              "value": `oshimenu_grey`,
              "description": `⠀Coming Soon. Just hang on a little longer.`,
              "emoji": {
                "id": `1017904150496935967`,
                "name": `OshiMarkGrey`,
                "animated": false
              },
              "default": false
            },
            {
              "label": `⠀Gaia`,
              "value": `oshimenu_mc`,
              "description": `⠀Coming Soon. Just hang on a little longer.`,
              "emoji": {
                "id": `1017904148856971396`,
                "name": `OshiMarkGaia`,
                "animated": false
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
      "title": `◈ Jewel☆Star Oshi Marks`,
      "description": `Choose your Oshi's mark so you get notified about everything related to them.\nYou may pick multiple ones, but only the highest role will affect your profile.\n\nThe <@&808333560662327316> role is required.\nIf you're missing the role, please go to <#761911943971340318>.`,
      "color": 0xfeadcc
    }
  ]
});