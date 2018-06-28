"use strict";


hexo.extend.tag.register("steam", function (args) {

    var appId = "";
    var returnHTML = "";

    if (args[0] && args[0].match(/https\:\/\/store\.steampowered\.com\/app\/[0-9]+/)) {

        // URL
        appId = args[0].match(/https\:\/\/store\.steampowered\.com\/app\/([0-9]+)/)[1];

    } else if (args[0] && args[0].match(/^[0-9]+$/)) {

        // appId only
        appId = args[0];
    }

    if (appId != "") {
        returnHTML = `<iframe src="https://store.steampowered.com/widget/${appId}/" frameborder="0" height="190" width="646" class="steam-embed"></iframe>`;
    }
    return returnHTML;
}, {
    async: true,
    ends: false
});