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
          "style": 2,
          "label": `Perfect Scarlet`,
          "custom_id": `colormenu_red`,
          "disabled": false,
          "emoji": {
            "id": `1017182715113644132`,
            "name": `ColorRoleCherryRed`,
            "animated": false
          },
          "type": 2
        },
        {
          "style": 2,
          "label": `Blossom Pink`,
          "custom_id": `colormenu_pink`,
          "disabled": false,
          "emoji": {
            "id": `1017182713851154473`,
            "name": `ColorRoleBlossomPink`,
            "animated": false
          },
          "type": 2
        },
        {
          "style": 2,
          "label": `Grape Violet`,
          "custom_id": `colormenu_violet`,
          "disabled": false,
          "emoji": {
            "id": `1017182716409688185`,
            "name": `ColorRoleGrapeViolet`,
            "animated": false
          },
          "type": 2
        },
        {
          "style": 2,
          "label": `Acqua Blue`,
          "custom_id": `colormenu_blue`,
          "disabled": false,
          "emoji": {
            "id": `1017182712290889779`,
            "name": `ColorRoleAcquaBlue`,
            "animated": false
          },
          "type": 2
        }
      ]
    },
    {
      "type": 1,
      "components": [
        {
          "style": 2,
          "label": `Kiwi Green`,
          "custom_id": `colormenu_green`,
          "disabled": false,
          "emoji": {
            "id": `1017182718947229798`,
            "name": `ColorRolePearGreen`,
            "animated": false
          },
          "type": 2
        },
        {
          "style": 2,
          "label": `Lemonade Yellow`,
          "custom_id": `colormenu_yellow`,
          "disabled": false,
          "emoji": {
            "id": `1017182717680570498`,
            "name": `ColorRoleLemonadeYellow`,
            "animated": false
          },
          "type": 2
        },
        {
          "style": 2,
          "label": `Azure Sky`,
          "custom_id": `colormenu_sky`,
          "disabled": false,
          "emoji": {
            "id": `1017851823111032883`,
            "name": `ColorRoleAzureSky`,
            "animated": false
          },
          "type": 2
        },
        {
          "style": 2,
          "label": `Juicy Orange`,
          "custom_id": `colormenu_orange`,
          "disabled": false,
          "emoji": {
            "id": `1017851962127036508`,
            "name": `ColorRoleJuicyOrange`,
            "animated": false
          },
          "type": 2
        }
      ]
    },
    {
      "type": 1,
      "components": [
        {
          "style": 2,
          "label": `Starlight Gold`,
          "custom_id": `colormenu_gold`,
          "disabled": false,
          "emoji": {
            "id": `1017831139949412562`,
            "name": `ColorRoleStarlightGold`,
            "animated": false
          },
          "type": 2
        },
        {
          "style": 2,
          "label": `Moonlight Silver`,
          "custom_id": `colormenu_silver`,
          "disabled": false,
          "emoji": {
            "id": `1017831138716291133`,
            "name": `ColorRoleMoonlightSilver`,
            "animated": false
          },
          "type": 2
        },
        {
          "style": 2,
          "label": `Eternal Light`,
          "custom_id": `white`,
          "disabled": false,
          "emoji": {
            "id": `1017854976535580732`,
            "name": `ColorRoleEternalLight`,
            "animated": false
          },
          "type": 2
        },
        {
          "style": 2,
          "label": `Infinite Night`,
          "custom_id": `colormenu_black`,
          "disabled": false,
          "emoji": {
            "id": `1017854978100056185`,
            "name": `ColorRoleInfiniteNight`,
            "animated": false
          },
          "type": 2
        }
      ]
    }
  ],
  "embeds": [
    {
      "type": "rich",
      "title": `◈ Color Roles`,
      "description": `You can select more than one color, but only one will affect your nickname's color.\n\nThe <@&808333560662327316> role is required.\nIf you're missing the role, please go to <#761911943971340318>.`,
      "color": 0xfeadcc
    }
  ]
});