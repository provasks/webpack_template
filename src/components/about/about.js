/* about.js */
// var myApp = myApp || {};

// import * as Util from '../../common/js/utils.js';
// myApp.Util = myApp.Util || new Util();
var that;
function About(myApp) {
    if (!myApp.About) {
        myApp.About = this;
    }
    that = myApp;
    return myApp.About;
}

About.prototype.init = function () {
    that.Util.bindEventListener('.about #btnTest', 'click', this);
    that.Util.bindEventListener('.about #btnHome', 'click', this, function () {
        location.href = '/';
    });
}

module.exports = About;

setTimeout(function () {
    that.About.init();
}, 200);


