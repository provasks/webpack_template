var that;
function Util(myApp) {
    if (!myApp.Util) {
        myApp.Util = this;
    }
    that = myApp;
    return myApp.Util;
}

Util.prototype.getElement = function (obj) {
    return document.querySelector(obj);
};

Util.prototype.getElements = function (obj) {
    return document.querySelectorAll(obj);
};

Util.prototype.bindEventListener = function (obj, evt, srcClass, callback) {
    var elements = this.getElements(obj);
    elements.forEach(function (elm) {
        if (elm.removeEventListener) {                   // For all major browsers, except IE 8 and earlier
            elm.removeEventListener(evt, that.Util.logEvent);
        } else if (x.detachEvent) {                    // For IE 8 and earlier versions
            elm.detachEvent(evt, that.Util.logEvent);
        }
        elm.addEventListener(evt, that.Util.logEvent, false);
        elm.source = srcClass.constructor.name;     //add parameter
        elm.callback = callback;
    });
};

Util.prototype.logEvent = function (evt) {
    console.log(`Module: ${evt.target.source}, Element: ${evt.target.tagName} ID: ${evt.target.id}, Event: ${evt.type}`);
    if (evt.target.callback) {
        evt.target.callback();
    }
}


module.exports = Util;

// var Util = function () {
//     if (!instance) {
//         instance = this;
//         return instance;   
//     }
//     return {
//         getElement: function (obj) {
//             return document.querySelector(obj);
//         },
//         getElements: function (obj) {
//             return document.querySelectorAll(obj);
//         },
//         bindEventListener: function (obj, evt, fn) {
//             let elements = this.getElements(obj);
//             elements.forEach(function(elm){
//                 elm.removeEventListener(evt, fn);
//                 elm.addEventListener(evt, fn);
//             });
//         }
//     };
// };

// let instance = null;
// export default class Util {
//     constructor() {
//         if (!instance) {
//             instance = this;
//         }
//         return instance;
//     }
//     getElement(obj = "") {
//         return document.querySelector(obj);
//     }
//     getElements(obj = "") {
//         return document.querySelectorAll(obj);
//     }
//     bindEventListener(obj = "", evt, fn) {
//         let elements = this.getElements(obj);
//         elements.forEach(function (elm) {
//             elm.removeEventListener(evt, fn);
//             elm.addEventListener(evt, fn);
//         });
//     }
// }
// // export default Util;