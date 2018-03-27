// ==UserScript==
// @name         Better Jenkins console output
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  It removes side-bar
// @author       Levent Yalcin
// @match        /console || /consoleFull
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if ( window.location.href.match("\/console$")
         || window.location.href.match("\/consoleFull$")
       ) {
        document.getElementById("side-panel").remove();
        document.getElementById('main-panel').style.marginLeft = "0px";
    }

})();
