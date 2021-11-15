// ==UserScript==
// @name         Shopware 6 - Colorize Admin Panel
// @namespace    https://github.com/derjumpy/shopware
// @description  Colorize the administration panel to distinguish between different instances.
// @author       Stephan Niewerth (snw@heise.de)
// @version      0.1.0
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const comment = GM_info.script.options.comment.split('\n');
    const pageConfig = new Map(comment.map(comment => comment.split('=')));

    window.Shopware.State.subscribeAction(({type}) => {
        if (type !== 'shopwareApps/setAppModules') {
            return;
        }

        const color = pageConfig.get(window.location.hostname);
        if (typeof color !== 'undefined') {
            document.querySelector('.sw-admin-menu__header').style.backgroundColor = color;
        }
    });
})();