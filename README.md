hexo-tag-steam
===

Embed Steam tag plugin for Hexo.

[![npm](https://img.shields.io/npm/v/hexo-tag-steam.svg?style=flat-square)](https://www.npmjs.com/package/hexo-tag-steam)
[![npm](https://img.shields.io/npm/l/hexo-tag-steam.svg?style=flat-square)](https://www.npmjs.com/package/hexo-tag-steam)

## DEMO

![screenshot](https://i.imgur.com/7msibpO.png)


## Getting Started

### Install

```bash
npm install hexo-tag-steam --save
```

### Usage

```
{% steam https://store.steampowered.com/app/286000/Tooth_and_Tail/ %}
```

or like this?

```
{% steam 286000 %}
```

### Customize

This embed has .steam-embed class.

You can easily customize a style for the embed.

```css
.steam-embed {
    width: 100%
}
```

## Thank

This project was very helpful for me for the first time to create a hexo plugin: https://github.com/tea3/hexo-tag-twitter


## License

This project is licensed under the MIT License.