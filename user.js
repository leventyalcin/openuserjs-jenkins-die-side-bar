// ==UserScript==
// @name         Better Jenkins console output
// @namespace    https://github.com/leventyalcin/openuserjs-jenkins-die-side-bar
// @homepage     https://github.com/leventyalcin/openuserjs-jenkins-die-side-bar
// @version      0.0.1
// @description  It removes side-bar
// @author       Levent Yalcin
// @license      Apache-2.0
// @match        https://*/job/*/console*
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
