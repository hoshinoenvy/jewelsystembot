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
          "label": `Art-sonist`,
          "custom_id": `activitymenu_artist`,
          "disabled": false,
          "emoji": {
            "id": null,
            "name": `🎨`
          },
          "type": 2
        },
        {
          "style": 2,
          "label": `Movie Night`,
          "custom_id": `activitymenu_movienight`,
          "disabled": false,
          "emoji": {
            "id": null,
            "name": `🎬`
          },
          "type": 2
        },
        {
          "style": 2,
          "label": `vTuber`,
          "custom_id": `activitymenu_vtuber`,
          "disabled": false,
          "emoji": {
            "id": null,
            "name": `👾`
          },
          "type": 2
        },
        {
          "style": 2,
          "label": `Meme Lord`,
          "custom_id": `activitymenu_meme`,
          "disabled": false,
          "emoji": {
            "id": null,
            "name": `🖼`
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
          "label": `Super Idol`,
          "custom_id": `activitymenu_music`,
          "disabled": false,
          "emoji": {
            "id": null,
            "name": `🎵`
          },
          "type": 2
        },
        {
          "style": 2,
          "label": `Masterchef`,
          "custom_id": `activitymenu_food`,
          "disabled": false,
          "emoji": {
            "id": null,
            "name": `👨`
          },
          "type": 2
        },
        {
          "style": 2,
          "label": `Otaku-kun`,
          "custom_id": `activitymenu_anime`,
          "disabled": false,
          "emoji": {
            "id": `1017974613264834580`,
            "name": `IconAniList`,
            "animated": false
          },
          "type": 2
        },
        {
          "style": 2,
          "label": `Gamer Nerd`,
          "custom_id": `activitymenu_game`,
          "disabled": false,
          "emoji": {
            "id": null,
            "name": `🎮`
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
          "label": `YGO Duelist`,
          "custom_id": `activitymenu_yugioh`,
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
          "label": `Traveller`,
          "custom_id": `activitymenu_genshin`,
          "disabled": false,
          "emoji": {
            "id": `792515926116532273`,
            "name": `geo`,
            "animated": false
          },
          "type": 2
        },
        {
          "style": 2,
          "label": `Villager`,
          "custom_id": `activitymenu_minecraft`,
          "disabled": false,
          "emoji": {
            "id": `949024473259049060`,
            "name": `grass_block`,
            "animated": false
          },
          "type": 2
        },
        {
          "style": 2,
          "label": `Pokémon Trainer`,
          "custom_id": `activitymenu_pokemon`,
          "disabled": false,
          "emoji": {
            "id": `949027011156901918`,
            "name": `pokeball`,
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
      "title": `◈ Activity Roles`,
      "description": `Selecting an Activity Role will unlock the channels related to that category.\nYou may select multiple ones.\n\nThe <@&808333560662327316> role is required.\nIf you're missing the role, please go to <#761911943971340318>.`,
      "color": 0xfeadcc
    }
  ]
});